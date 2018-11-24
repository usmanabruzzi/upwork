import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { PaginatorComponent } from './paginator/paginator.component';


@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    PaginatorComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
