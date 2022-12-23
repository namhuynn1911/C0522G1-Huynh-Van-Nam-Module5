import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HeaderModule} from "./header/header.module";
import {FooterModule} from "./footer/footer.module";
import {FilmModule} from './film/film.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HeaderModule,
        FooterModule,
        FilmModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
