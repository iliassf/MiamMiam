import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifRecettePage } from './modif-recette.page';

const routes: Routes = [
  {
    path: '',
    component: ModifRecettePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifRecettePageRoutingModule {}
