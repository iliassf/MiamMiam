import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recette } from '../models/recette';
import { RecetteService } from '../services/recette.service';
import { ActivatedRoute } from '@angular/router';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-recette-collection',
  templateUrl: './recette-collection.page.html',
  styleUrls: ['./recette-collection.page.scss'],
})
export class RecetteCollectionPage implements OnInit {
  recettes: Recette[] = [];
  title: string = '';

  constructor(
    private RecetteService: RecetteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let type = this.route.snapshot.params['collection'];
    if (type === 'my') {
      this.title = 'Mes recettes';
      this.RecetteService.getMyRecette(getAuth().currentUser!.uid);
    } else {
      this.title = 'Mes favories';
    }
  }
}
