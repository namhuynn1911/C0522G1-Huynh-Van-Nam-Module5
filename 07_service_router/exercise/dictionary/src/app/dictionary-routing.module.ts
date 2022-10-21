import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DictionaryPageComponentComponent} from "./dictionary-page-component/dictionary-page-component.component";
import {DictionaryDetailComponentComponent} from "./dictionary-detail-component/dictionary-detail-component.component";

const routes: Routes = [
  {path: '', component: DictionaryPageComponentComponent},
  {path: 'detail/:word', component: DictionaryDetailComponentComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class DictionaryRoutingModule { }
