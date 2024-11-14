import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetteDescriptionPageRoutingModule } from './recette-description-routing.module';

import { RecetteDescriptionPage } from './recette-description.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetteDescriptionPageRoutingModule,
  ],
  declarations: [RecetteDescriptionPage],
})
export class RecetteDescriptionPageModule {}
