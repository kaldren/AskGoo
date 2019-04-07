import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './pages/feed/feed.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AuthGuardService } from './_guards/auth-guard.service';
import { SigninComponent } from './pages/signin/signin.component';
import { MessageDetailComponent } from './pages/message-detail/message-detail.component';

const routes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'messages/:id', component: MessageDetailComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'signin', canActivate: [!AuthGuardService], component: SigninComponent },
  { path: '**', redirectTo: 'feed' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
