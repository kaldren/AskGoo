import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './pages/feed/feed.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AuthGuardService } from './_guards/auth-guard.service';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
  // { path: '', canActivate: [AuthGuardService], children: [
  //   { path: '', component: FeedComponent },
  //   { path: 'feed', component: FeedComponent },
  //   { path: 'messages', component: MessagesComponent },
  //   { path: 'settings', component: SettingsComponent },
  // ]},
  { path: '', component: FeedComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'signin', canActivate: [!AuthGuardService], component: SigninComponent },
  { path: '**', redirectTo: 'feed' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
