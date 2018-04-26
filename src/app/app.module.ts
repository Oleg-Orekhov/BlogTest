import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NoteCreatorComponent } from './note-control/note-creator/note-creator.component';
import { NotesService } from './services/notes.service';

import { AppRoutingModule } from './app-routing.module';
import { NoteEditorComponent } from './note-control/note-editor/note-editor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NoteCreatorComponent,
    NoteEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
