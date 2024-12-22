import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private Router: Router,
    private Auth: AuthService,
    private toastController: ToastController
  ) {}

  login() {
    if (this.email.trim() !== '' && this.password.trim() !== '') {
      this.Auth.loginWithEmail(this.email, this.password)
        .then(() => {
          this.email = '';
          this.password = '';
          this.Router.navigateByUrl('home');
        })
        .catch((error) => {
          console.error('Login failed:', error);
          this.presentToast('Identifiant ou mot de passe incorrect.');
        });
    } else {
      this.presentToast('Veillez remplir les deux champs.');
    }
  }

  signup() {
    this.Router.navigateByUrl('signup');
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
