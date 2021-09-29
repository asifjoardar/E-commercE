import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'signin', pathMatch: 'full',component: SignInComponent },
      { path: 'signup', pathMatch: 'full',component: SignUpComponent }
    ]),
    CommonModule,
    SharedModule
  ]
})
export class AuthModule { }
