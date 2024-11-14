import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecetteService } from '../services/recette.service';
import { Recette } from '../models/recette';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  recettes: Recette[] = [];
  filteredRecettes: Recette[] = [];
  researchText: string = '';
  private recettesSubscription: Subscription = new Subscription();

  constructor(private recetteService: RecetteService) {}

  ngOnInit(): void {
    this.recettesSubscription = this.recetteService.recettes$.subscribe(
      (recettes) => {
        this.recettes = recettes;
        this.filterRecettes();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.recettesSubscription) {
      this.recettesSubscription.unsubscribe();
    }
  }

  filterRecettes(): void {
    if (this.researchText == '') {
      this.filteredRecettes = this.recettes;
    } else {
      this.filteredRecettes = this.recettes.filter((recette: Recette) => {
        return recette.title
          .trim()
          .toLowerCase()
          .includes(this.researchText.trim().toLowerCase());
      });
    }
  }
}
