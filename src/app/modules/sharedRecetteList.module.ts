import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetteListComponent } from '../recette-list/recette-list.component';
import { RecetteComponent } from '../recette/recette.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RecetteListComponent, RecetteComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [RecetteListComponent, RecetteComponent],
})
export class SharedRecetteListModule {}
