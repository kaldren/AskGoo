import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private route: Router) {
  }

  canActivate(): boolean {
    const isSignedInuser = this.authService.isSignedInUser();

    if (isSignedInuser) {
      return true;
    } else {
      this.route.navigate(['/signin']);
    }
  }
}
