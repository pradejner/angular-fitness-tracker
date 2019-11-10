import { Subject } from 'rxjs';

import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  isLoggedIn = new Subject<boolean>();
  private user: User;

  constructor(private router: Router) {

  }

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authSuccess();
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authSuccess();
  }

  logout() {
    this.user = null;
    this.isLoggedIn.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return {...this.user };
  }

  isAuth() {
    return this.user != null;
  }

  private authSuccess() {
    this.isLoggedIn.next(true);
    this.router.navigate(['/training']);
  }
}
