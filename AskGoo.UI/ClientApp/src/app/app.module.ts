import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeedComponent } from './pages/feed/feed.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AuthGuardService } from './_guards/auth-guard.service';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './pages/signin/signin.component';
import { MessageDetailComponent } from './pages/message-detail/message-detail.component';
import { NewMessageComponent } from './pages/messages/new-message/new-message.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    FeedComponent,
    MessagesComponent,
    SettingsComponent,
    SigninComponent,
    MessageDetailComponent,
    NewMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    NgxSpinnerModule,
    OAuthModule.forRoot(
      {
        resourceServer: {
          allowedUrls: ['https://localhost:6000/api'],
          sendAccessToken: true
        }
      }
    ),
    FormsModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
