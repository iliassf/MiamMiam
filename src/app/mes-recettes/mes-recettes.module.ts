import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesRecettesPageRoutingModule } from './mes-recettes-routing.module';
import { SharedRecetteListModule } from '../modules/sharedRecetteList.module';

import { MesRecettesPage } from './mes-recettes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesRecettesPageRoutingModule,
    SharedRecetteListModule,
  ],
  declarations: [MesRecettesPage],
})
export class MesRecettesPageModule {}
