import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecetteService } from '../services/recette.service';
import { Recette } from '../models/recette';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  recettes: Recette[] = [];
  filteredRecettes: Recette[] = [];
  researchText: string = '';

  constructor(private recetteService: RecetteService) {}

  ngOnInit(): void {
    this.recetteService.getAllRecettes().subscribe((data) => {
      this.recettes = data;
      this.filterRecettes();
    });
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
