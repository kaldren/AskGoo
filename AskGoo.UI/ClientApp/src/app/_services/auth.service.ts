import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oauthService: OAuthService) { }

  public isSignedInUser(): boolean {
    const claims = this.oauthService.getIdentityClaims();

    if (claims) {
      return true;
    }
    return false;
  }
}
