import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private oauthService: OAuthService, private router: Router){
    // this.router.navigate(['/feed']);
  }

  public signOut() {
    this.oauthService.logOut();
  }

  ngOnInit() {
  }

}
