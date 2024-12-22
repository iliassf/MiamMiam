import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  email: string = '';
  name: string = '';
  password1: string = '';
  password2: string = '';

  constructor(
    private Auth: AuthService,
    private Router: Router,
    private toastController: ToastController
  ) {}

  signup(): void {
    if (
      this.email.trim() !== '' &&
      this.password1 === this.password2 &&
      this.password1.length >= 6 &&
      this.name.trim() != ''
    ) {
      this.Auth.signup(this.email, this.password1, this.name);
      this.email = '';
      this.name = '';
      this.password1 = '';
      this.password2 = '';
    } else {
      this.presentToast('Veillez remplir tous les champs.');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2500,
      position: 'top',
      icon: 'alert-circle-outline',
    });

    await toast.present();
  }
}
