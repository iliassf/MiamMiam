import { Component, Input } from '@angular/core';
import { Recette } from '../models/recette';
import { RecetteService } from '../services/recette.service';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss'],
})
export class RecetteComponent {
  @Input() recette: Recette = new Recette();

  constructor(private RecetteService: RecetteService) {}

  deleteRecette(event: any, id: string) {
    event.stopPropagation();
    this.RecetteService.deleteRecette(id);
  }

  isCreator(id: string): boolean {
    if (getAuth() !== null) {
      if (getAuth().currentUser?.uid === id) {
        return true;
      }
    }
    return false;
  }
}
