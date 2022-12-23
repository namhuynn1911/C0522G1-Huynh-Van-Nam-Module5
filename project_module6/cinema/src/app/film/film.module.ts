import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmRoutingModule } from './film-routing.module';
import { FilmListComponent } from './film-list/film-list.component';


@NgModule({
  declarations: [FilmListComponent],
  exports: [
    FilmListComponent
  ],
  imports: [
    CommonModule,
    FilmRoutingModule
  ]
})
export class FilmModule { }
