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
    event.preventDefault();
    this.RecetteService.deleteRecette(id);
  }

  isConnected(): boolean {
    return getAuth().currentUser?.uid !== undefined;
  }

  isCreator(id: string): boolean {
    if (getAuth() !== null) {
      if (getAuth().currentUser?.uid === id) {
        return true;
      }
    }
    return false;
  }

  like(event: any) {
    event.stopPropagation();
    event.preventDefault();

    const auth = getAuth();
    const userId = auth.currentUser?.uid;

    if (userId) {
      const likeIndex = this.recette.likes.indexOf(userId);

      if (likeIndex == -1) {
        this.recette.likes.push(userId);
      } else {
        this.recette.likes.splice(likeIndex, 1);
      }

      this.RecetteService.updateRecette(this.recette, this.recette.id);
    }
  }

  hasLiked(): boolean {
    const userId = getAuth().currentUser?.uid;

    if (userId) {
      return this.recette.likes.includes(userId);
    }

    return false;
  }
}
