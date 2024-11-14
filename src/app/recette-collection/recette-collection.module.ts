import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetteCollectionPageRoutingModule } from './recette-collection-routing.module';

import { RecetteCollectionPage } from './recette-collection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetteCollectionPageRoutingModule,
  ],
  declarations: [RecetteCollectionPage],
})
export class RecetteCollectionPageModule {}
