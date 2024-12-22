import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilPage } from './profil.page';
import { MesRecettesPage } from '../mes-recettes/mes-recettes.page';
import { RecetteDescriptionPage } from '../recette-description/recette-description.page';
import { ModifRecettePage } from '../modif-recette/modif-recette.page';
import { MesFavoritesPage } from '../mes-favorites/mes-favorites.page';
import { authGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ProfilPage,
  },
  {
    path: 'mesRecettes',
    component: MesRecettesPage,
    canActivate: [authGuard],
  },
  {
    path: 'mesRecettes/recette/:id',
    component: RecetteDescriptionPage,
  },
  {
    path: 'mesRecettes/recetteModif/:id',
    component: ModifRecettePage,
  },
  {
    path: 'mesFavorites',
    component: MesFavoritesPage,
    canActivate: [authGuard],
  },
  {
    path: 'mesFavorites/recette/:id',
    component: RecetteDescriptionPage,
  },
  {
    path: 'mesFavorites/recetteModif/:id',
    component: ModifRecettePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilPageRoutingModule {}
