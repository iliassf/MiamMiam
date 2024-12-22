import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesFavoritesPageRoutingModule } from './mes-favorites-routing.module';
import { SharedRecetteListModule } from '../modules/sharedRecetteList.module';

import { MesFavoritesPage } from './mes-favorites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesFavoritesPageRoutingModule,
    SharedRecetteListModule,
  ],
  declarations: [MesFavoritesPage],
})
export class MesFavoritesPageModule {}
