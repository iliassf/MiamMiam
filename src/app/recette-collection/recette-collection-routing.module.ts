import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetteCollectionPageRoutingModule {}
