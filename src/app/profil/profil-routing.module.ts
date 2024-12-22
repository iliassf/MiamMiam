import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilPage } from './profil.page';
import { MesRecettesPage } from '../mes-recettes/mes-recettes.page';
import { RecetteDescriptionPage } from '../recette-description/recette-description.page';
import { ModifRecettePage } from '../modif-recette/modif-recette.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilPage,
  },
  {
    path: 'mesRecettes',
    component: MesRecettesPage,
  },
  {
    path: 'mesRecettes/recette/:id',
    component: RecetteDescriptionPage,
  },
  {
    path: 'mesRecettes/recetteModif/:id',
    component: ModifRecettePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilPageRoutingModule {}
