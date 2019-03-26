import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

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

  public get name() {
    this.claims = this.oauthService.getIdentityClaims();
    if (!this.claims)
    {
      return null;
    }
    return this.claims;
  }

  ngOnInit() {
  }

}
