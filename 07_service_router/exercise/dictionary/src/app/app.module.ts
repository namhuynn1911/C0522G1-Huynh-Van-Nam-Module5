import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DictionaryPageComponentComponent } from './dictionary-page-component/dictionary-page-component.component';
import { DictionaryDetailComponentComponent } from './dictionary-detail-component/dictionary-detail-component.component';
import { DictionaryRoutingModule } from './dictionary-routing.module';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    DictionaryPageComponentComponent,
    DictionaryDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    DictionaryRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
