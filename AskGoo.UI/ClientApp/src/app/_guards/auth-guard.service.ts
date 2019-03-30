import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) {
  }

  canActivate(): boolean {
      return this.authService.isSignedInUser();
  }
}
