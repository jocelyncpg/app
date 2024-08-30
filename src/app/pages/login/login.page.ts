import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  usernameError: boolean = false;
  passwordError: boolean = false;

  constructor(private router: Router) {}

  login() {
    this.usernameError = false;
    this.passwordError = false;

    if (!this.validateEmail(this.username)) {
      this.usernameError = true;
    }

    if (this.password.length < 5) {
      this.passwordError = true;
    }

    if (!this.usernameError && !this.passwordError) {
      this.router.navigate(['/attendance'], { queryParams: { username: this.username } });
    }
  }

  validateEmail(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
