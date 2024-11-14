import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { getAuth } from 'firebase/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage {
  constructor(
    private Auth: AuthService,
    private Router: Router,
    private toastController: ToastController
  ) {}

  signout(): void {
    if (getAuth().currentUser !== null) {
      this.Auth.signout();
      this.presentToast();
    }
  }

  redirect(type: string): void {
    if (getAuth().currentUser === null) {
      this.Router.navigateByUrl('login');
    } else {
      if (type === 'my') {
        this.Router.navigate(['recette-collection', 'my']);
      } else {
        this.Router.navigate(['recette-collection', 'favorites']);
      }
    }
  }

  isLog(): boolean {
    return getAuth().currentUser !== null;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Vous êtes deconnecté',
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }
}
