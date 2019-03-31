import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { authConfig } from './authConfig';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClientApp';
  claims: any;

  constructor(private oauthService: OAuthService, private router: Router){
    this.configureApi();
  }

  private configureApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndLogin();
  }

  public get userClaims() {
    return this.oauthService.getIdentityClaims();
  }

  public get name() {
    this.claims = this.oauthService.getIdentityClaims();
    if (!this.claims)
    {
      return null;
    }
    return this.claims.name;
  }

  public signOut() {
    this.oauthService.logOut();
  }
}
