import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FilmModule} from './film/film.module';


const routes: Routes = [
  {path: 'film', loadChildren: () => FilmModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
