import { Component } from '@angular/core';
import { Recette } from '../models/recette';
import { Ingredient } from '../models/ingredient';
import { RecetteService } from '../services/recette.service';
import { ToastController } from '@ionic/angular';
import { getAuth } from 'firebase/auth';
import { Creator } from '../models/creator';

@Component({
  selector: 'app-new-recette',
  templateUrl: './new-recette.page.html',
  styleUrls: ['./new-recette.page.scss'],
})
export class NewRecettePage {
  recette: Recette = new Recette();
  ingredient: Ingredient = new Ingredient();
  step: string = '';

  constructor(
    private RecetteService: RecetteService,
    private toastController: ToastController
  ) {}

  ajouterIngredient(): void {
    this.recette.ingredients.push(this.ingredient);
    this.ingredient = new Ingredient();
  }

  deleteIngredient(ingredient: Ingredient): void {
    this.recette.ingredients = this.recette.ingredients.filter(
      (elm: Ingredient) => {
        return elm !== ingredient;
      }
    );
  }

  deleteStep(index: number): void {
    this.recette.steps.splice(index, 1);
  }

  async partagerRecette(): Promise<void> {
    if (
      this.recette.title.trim() !== '' &&
      this.recette.ingredients.length !== 0 &&
      this.recette.steps.length !== 0 &&
      this.recette.numberOfShares >= 1 &&
      this.recette.time >= 1
    ) {
      this.recette.creator = new Creator(
        getAuth().currentUser?.uid!,
        getAuth().currentUser?.displayName!
      );
      await this.RecetteService.addRecette(this.recette);
      this.recette = new Recette();
      this.presentToast(
        'Votre recette est entre les mains de nos chefs',
        'restaurant-outline'
      );
    } else {
      this.presentToast(
        'Veillez remplir tous les champs principaux',
        'alert-circle-outline'
      );
    }
  }

  async presentToast(message: string, icon: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2500,
      position: 'top',
      icon: icon,
    });

    await toast.present();
  }
}
