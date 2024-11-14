import { Component, Input } from '@angular/core';
import { Recette } from '../models/recette';

@Component({
  selector: 'app-recette-list',
  templateUrl: './recette-list.component.html',
  styleUrls: ['./recette-list.component.scss'],
})
export class RecetteListComponent {
  @Input() recettes: Recette[] = [];
  constructor() {}
}
