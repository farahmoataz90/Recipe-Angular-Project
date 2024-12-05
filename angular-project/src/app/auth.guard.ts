import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const currentUrl = this.router.url;

    // Exclude routes like /login and /signup from showing the navbar
    const excludedRoutes = ['/login', '/signup'];
    if (excludedRoutes.includes(currentUrl)) {
      return false; // Guard prevents loading
    }
    return true; // Allow route to load
  }
}
