import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';


@NgModule({
    declarations: [HeaderNavbarComponent],
    exports: [
        HeaderNavbarComponent
    ],
    imports: [
        CommonModule,
        HeaderRoutingModule
    ]
})
export class HeaderModule { }
