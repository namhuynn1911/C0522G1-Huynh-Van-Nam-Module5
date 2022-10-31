import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [CustomerListComponent, CustomerEditComponent, CustomerCreateComponent],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        FormsModule
    ]
})
export class CustomerModule { }
