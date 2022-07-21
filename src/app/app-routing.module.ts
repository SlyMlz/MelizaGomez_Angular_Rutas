///////////////////////////////////////////////////////////////////////////////////////////////////
//Presentado por: Shirley Meliza Gomez Salcedo
//Programación Avanzada II
//UNIVERSIDAD DE NARIÑO
//NOVENO SEMESTRE
///////////////////////////////////////////////////////////////////////////////////////////////////

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './Modules/auth/loginpage/loginpage.component';
import { RegisterComponent } from './Modules/auth/register/register.component';
import { ValidationsComponent } from './Modules/auth/validations/validations.component';
import { MarcadoresviewsComponent } from './Modules/favoritos/marcadoresviews/marcadoresviews.component';
import { HistorymenuComponent } from './Modules/history/historymenu/historymenu.component';
import { FooterComponent } from './Modules/home/footer/footer.component';
import { HeadersComponent } from './Modules/home/headers/headers.component';
import { TrackslistComponent } from './Modules/tracks/trackslist/trackslist.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';


const routes: Routes = [
  {
    path:'',//Localhost:4200 de primera ruta
    component: MycomponentComponent
  },

  {
    path:'Login',//Localhost:4200 de primera ruta
    component: LoginpageComponent
  },

  {
    path:'Register',//Localhost:4200 de primera ruta
    component: RegisterComponent
  },

  {
    path:'Validations',//Localhost:4200 de primera ruta
    component: ValidationsComponent
  },

  {
    path:'Marcadoresview',//Localhost:4200 de primera ruta
    component: MarcadoresviewsComponent
  },

  {
    path:'Footer',//Localhost:4200 de primera ruta
    component: FooterComponent
  },

  {
    path:'Headers',//Localhost:4200 de primera ruta
    component: HeadersComponent
  },

  {
    path:'Historymenu',//Localhost:4200 de primera ruta
    component: HistorymenuComponent
  },

  {
    path:'Tracklist',//Localhost:4200 de primera ruta
    component: TrackslistComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

