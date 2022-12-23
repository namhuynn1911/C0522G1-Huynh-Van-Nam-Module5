import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterFilmComponent } from './footer-film/footer-film.component';


@NgModule({
    declarations: [FooterFilmComponent],
    exports: [
        FooterFilmComponent
    ],
    imports: [
        CommonModule,
        FooterRoutingModule
    ]
})
export class FooterModule { }
