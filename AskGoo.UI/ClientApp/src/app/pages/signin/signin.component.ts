import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private oauthService: OAuthService) { }

  claims: any;

  login() {
    console.log('Clicked login button');
    this.oauthService.initImplicitFlow();
  }

  public logout() {
    this.oauthService.logOut();
  }

  public showClaims() {
    console.log(this.claims);
  }

  public showAccessToken() {
    console.log(this.oauthService.getAccessToken());
  }

  public showIdentityToken() {
    console.log(this.oauthService.getIdToken());
  }

  public get name() {
    this.claims = this.oauthService.getIdentityClaims();
    if (!this.claims)
    {
      return null;
    }
    return this.claims.sub;
  }

  ngOnInit() {
  }

}
