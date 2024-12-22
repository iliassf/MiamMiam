import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recette } from '../models/recette';
import { RecetteService } from '../services/recette.service';
import { getAuth } from 'firebase/auth';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-mes-favorites',
  templateUrl: './mes-favorites.page.html',
  styleUrls: ['./mes-favorites.page.scss'],
})
export class MesFavoritesPage implements OnInit, OnDestroy {
  recettes: Recette[] = [];
  userId: string | null = getAuth().currentUser!.uid;
  recetteObservable: Observable<Recette[]> = new Observable();
  subscription: Subscription | null = null;

  constructor(private RecetteService: RecetteService) {}

  ngOnInit(): void {
    this.initRecetteObservable();
  }

  initRecetteObservable(): void {
    this.userId = getAuth().currentUser!.uid;

    this.subscription = this.RecetteService.getMyFavorites(
      this.userId
    ).subscribe((data) => {
      this.recettes = data;
    });
  }

  ionViewWillEnter() {
    const currentUserId = getAuth().currentUser!.uid;

    if (this.userId !== currentUserId) {
      this.unsubscribe();
    }
  }

  unsubscribe(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.initRecetteObservable();
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }
}
