import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http"

import { FormsModule } from '@angular/forms';

import { NotesListingComponent } from './notes-listing/notes-listing.component';
import { AddUpdateNotesComponent } from './add-update-notes/add-update-notes.component';

import { NotesServiceService } from './notes-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesListingComponent,
    AddUpdateNotesComponent
  ],
  imports: [
    BrowserModule,
   // AppRoutingModule,

    FormsModule,
    HttpClientModule
  ],
  providers: [NotesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
