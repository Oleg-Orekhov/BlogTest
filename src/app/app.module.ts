import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NoteCreatorComponent } from './note-control/note-creator/note-creator.component';
import { NotesService } from './services/notes.service';

import { AppRoutingModule } from './app-routing.module';
import { NoteEditorComponent } from './note-control/note-editor/note-editor.component';
import { FormsModule } from '@angular/forms';
import { NoteDetailsComponent } from './note-control/note-details/note-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NoteCommentsComponent } from './note-control/note-details/note-comments/note-comments.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NoteCreatorComponent,
    NoteEditorComponent,
    NoteDetailsComponent,
    NoteCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
