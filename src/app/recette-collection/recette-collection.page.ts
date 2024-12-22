import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recette } from '../models/recette';
import { RecetteService } from '../services/recette.service';
import { ActivatedRoute } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-recette-collection',
  templateUrl: './recette-collection.page.html',
  styleUrls: ['./recette-collection.page.scss'],
})
export class RecetteCollectionPage implements OnInit, OnDestroy {
  recettes: Recette[] = [];
  title: string = '';
  userId: string | null = getAuth().currentUser!.uid;
  recetteObservable: Observable<Recette[]> = new Observable();
  subscription: Subscription | null = null;

  constructor(
    private RecetteService: RecetteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initRecetteObservable();
  }

  initRecetteObservable(): void {
    const type = this.route.snapshot.params['collection'];
    this.userId = getAuth().currentUser!.uid;

    if (type === 'my') {
      this.title = 'Mes recettes';

      this.subscription = this.RecetteService.getMyRecette(
        this.userId
      ).subscribe((data) => {
        this.recettes = data;
      });
    } else {
      this.title = 'Mes favoris';
    }
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
