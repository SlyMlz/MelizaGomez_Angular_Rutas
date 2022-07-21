import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { TrackslistComponent } from './trackslist/trackslist.component';


@NgModule({
  declarations: [
    TrackslistComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule
  ]
})
export class TracksModule { }
