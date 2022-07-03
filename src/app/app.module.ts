import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { DeleteBooksComponent } from './delete-books/delete-books.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBooksComponent,
    SearchBooksComponent,
    ViewBooksComponent,
    DeleteBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
