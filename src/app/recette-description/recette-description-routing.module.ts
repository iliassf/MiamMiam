import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetteDescriptionPage } from './recette-description.page';

const routes: Routes = [
  {
    path: '',
    component: RecetteDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetteDescriptionPageRoutingModule {}
