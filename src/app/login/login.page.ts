import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private Router: Router, private Auth: AuthService) {}

  login() {
    if (this.email != '' && this.password != '') {
      this.Auth.loginWithEmail(this.email, this.password);
      this.email = '';
      this.password = '';
    }
  }

  signup() {
    this.Router.navigateByUrl('signup');
  }
}
