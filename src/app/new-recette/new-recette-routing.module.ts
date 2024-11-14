import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewRecettePage } from './new-recette.page';

const routes: Routes = [
  {
    path: '',
    component: NewRecettePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewRecettePageRoutingModule {}
