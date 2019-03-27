import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecretComponent } from './secret/secret.component';
import { AuthGuardService } from './_guards/auth-guard.service';

const routes: Routes = [
  { path: 'secret',
    component: SecretComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    component: HomeComponent
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
