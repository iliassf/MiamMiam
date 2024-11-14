import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { RecetteListComponent } from '../recette-list/recette-list.component';
import { RecetteComponent } from '../recette/recette.component';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, RecetteListComponent, RecetteComponent],
})
export class HomePageModule {}
