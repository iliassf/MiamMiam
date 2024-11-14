import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewRecettePageRoutingModule } from './new-recette-routing.module';

import { NewRecettePage } from './new-recette.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewRecettePageRoutingModule
  ],
  declarations: [NewRecettePage]
})
export class NewRecettePageModule {}
