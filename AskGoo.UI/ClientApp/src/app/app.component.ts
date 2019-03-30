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

  constructor(private oauthService: OAuthService, private router: Router){
    this.configureApi();
    this.router.navigate(['/feed']);
  }

  private configureApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
