import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogUpComponent } from './components/logUp/log-up.component';
import { LogInComponent } from './components/logIn/log-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: 'register',
    component: LogUpComponent
  },
  {
    path: 'login',
    component: LogInComponent
  }
]

@NgModule({
  declarations: [
    LogUpComponent,
    LogInComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
