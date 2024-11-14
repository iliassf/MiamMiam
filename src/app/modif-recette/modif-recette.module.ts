import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifRecettePageRoutingModule } from './modif-recette-routing.module';

import { ModifRecettePage } from './modif-recette.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifRecettePageRoutingModule
  ],
  declarations: [ModifRecettePage]
})
export class ModifRecettePageModule {}
