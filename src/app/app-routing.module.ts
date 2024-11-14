import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'profil',
    loadChildren: () =>
      import('./profil/profil.module').then((m) => m.ProfilPageModule),
  },
  {
    path: 'new-recette',
    loadChildren: () =>
      import('./new-recette/new-recette.module').then(
        (m) => m.NewRecettePageModule
      ),
    canActivate: [authGuard],
  },
  {
    path: 'recette-description',
    loadChildren: () =>
      import('./recette-description/recette-description.module').then(
        (m) => m.RecetteDescriptionPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'modif-recette',
    loadChildren: () =>
      import('./modif-recette/modif-recette.module').then(
        (m) => m.ModifRecettePageModule
      ),
  },
  {
    path: 'recette-collection',
    loadChildren: () =>
      import('./recette-collection/recette-collection.module').then(
        (m) => m.RecetteCollectionPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
