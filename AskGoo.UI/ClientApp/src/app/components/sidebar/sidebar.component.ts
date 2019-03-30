import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  userClaims: any;

  constructor(private oauthService: OAuthService){
    this.claims();
  }

  ngOnInit() {
  }

  private claims() {
    this.userClaims = this.oauthService.getIdentityClaims();
    if (!this.userClaims)
    {
      return null;
    }
    return this.userClaims;
  }

}
