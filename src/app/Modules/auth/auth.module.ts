import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginpageComponent } from './login-page/loginpage/loginpage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ValidationsComponent } from './validations/validations.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginpageComponent,
    LoginPageComponent,
    ValidationsComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
