import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { RecetteDescriptionPage } from '../recette-description/recette-description.page';
import { ModifRecettePage } from '../modif-recette/modif-recette.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'recette/:id',
    component: RecetteDescriptionPage,
  },
  {
    path: 'recetteModif/:id',
    component: ModifRecettePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
