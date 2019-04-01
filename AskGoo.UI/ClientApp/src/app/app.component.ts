import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';

import { authConfig } from './authConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ClientApp';
  claims: any;

  constructor(private oauthService: OAuthService,
    private router: Router,
    private spinner: NgxSpinnerService){
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

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 5000);
  }
}
