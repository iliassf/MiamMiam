import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recette } from '../models/recette';
import { RecetteService } from '../services/recette.service';
import { ActivatedRoute } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-mes-recettes',
  templateUrl: './mes-recettes.page.html',
  styleUrls: ['./mes-recettes.page.scss'],
})
export class MesRecettesPage implements OnInit, OnDestroy {
  recettes: Recette[] = [];
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
    this.userId = getAuth().currentUser!.uid;

    this.subscription = this.RecetteService.getMyRecette(this.userId).subscribe(
      (data) => {
        this.recettes = data;
      }
    );
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
