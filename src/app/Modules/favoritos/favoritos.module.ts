import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritosRoutingModule } from './favoritos-routing.module';
import { MarcadoresviewsComponent } from './marcadoresviews/marcadoresviews.component';


@NgModule({
  declarations: [
    MarcadoresviewsComponent
  ],
  imports: [
    CommonModule,
    FavoritosRoutingModule
  ]
})
export class FavoritosModule { }
