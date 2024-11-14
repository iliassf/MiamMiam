import { Component, OnInit } from '@angular/core';
import { Recette } from '../models/recette';
import { RecetteService } from '../services/recette.service';
import { ActivatedRoute } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { Mark } from '../models/mark';

@Component({
  selector: 'app-recette-description',
  templateUrl: './recette-description.page.html',
  styleUrls: ['./recette-description.page.scss'],
})
export class RecetteDescriptionPage implements OnInit {
  recette: Recette = new Recette();
  seeIngredient: boolean = true;
  mark: Mark = new Mark();

  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

  constructor(
    private RecetteService: RecetteService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    let id = this.route.snapshot.params['id'];
    this.recette = await this.RecetteService.getRecetteById(id);
    this.mark =
      this.recette.marks.find((elt) => {
        // Recherchons si l'utilisateur a déjà voté
        return elt.id === getAuth().currentUser?.uid;
      }) || new Mark();
  }

  changeSeeIngredient(bool: boolean): void {
    this.seeIngredient = bool;
  }

  isCreatorOrDeconnected(): boolean {
    if (getAuth().currentUser !== null) {
      if (getAuth().currentUser?.uid === this.recette.creator.id) {
        return true;
      }
    } else {
      return true;
    }
    return false;
  }

  voted(num: number) {
    let id = getAuth().currentUser?.uid;
    this.mark = new Mark(id, num);
    let pasVote = true;

    this.recette.marks = this.recette.marks.map((elt) => {
      if (elt.id === id) {
        pasVote = false;
        return this.mark;
      } else {
        return elt;
      }
    });

    if (pasVote) {
      this.recette.marks.push(this.mark);
    }

    this.recette.average = this.recette.recetteAverage(this.recette.marks);
    this.RecetteService.updateRecette(this.recette, this.recette.id);
  }
}
