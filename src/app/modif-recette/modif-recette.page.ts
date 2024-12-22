import { Component, OnInit } from '@angular/core';
import { Recette } from '../models/recette';
import { Ingredient } from '../models/ingredient';
import { RecetteService } from '../services/recette.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modif-recette',
  templateUrl: './modif-recette.page.html',
  styleUrls: ['./modif-recette.page.scss'],
})
export class ModifRecettePage implements OnInit {
  recette: Recette = new Recette();
  ingredient: Ingredient = new Ingredient();
  step: string = '';

  constructor(
    private RecetteService: RecetteService,
    private toastController: ToastController,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    let id = this.route.snapshot.params['id'];
    this.recette = await this.RecetteService.getRecetteById(id);
  }

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
      await this.RecetteService.updateRecette(this.recette, this.recette.id);
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
