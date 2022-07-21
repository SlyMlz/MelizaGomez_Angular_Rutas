import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';//modulo comun a cada archivo de modulo

import { HomeRoutingModule } from './home-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeadersComponent } from './headers/headers.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeadersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
