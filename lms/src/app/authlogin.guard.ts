import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = sessionStorage.getItem('token');

    if (token) {
      // User is already logged in, redirect to dashboard
      this.router.navigate(['/dashboard']);
      return false;
    }

    // Allow access to login page
    return true;
  }
}
