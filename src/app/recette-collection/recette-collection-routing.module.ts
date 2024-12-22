import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetteDescriptionPage } from '../recette-description/recette-description.page';
import { ModifRecettePage } from '../modif-recette/modif-recette.page';

import { RecetteCollectionPage } from './recette-collection.page';

const routes: Routes = [
  {
    path: '',
    component: RecetteCollectionPage,
  },
  {
    path: ':collection',
    component: RecetteCollectionPage,
  },
  {
    path: ':collection/recette/:id',
    component: RecetteDescriptionPage,
  },
  {
    path: ':collection/recetteModif/:id',
    component: ModifRecettePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetteCollectionPageRoutingModule {}
