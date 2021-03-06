import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { NoteCreatorComponent } from './note-control/note-creator/note-creator.component';
import {NoteEditorComponent} from './note-control/note-editor/note-editor.component';
import {NoteDetailsComponent} from './note-control/note-details/note-details.component';

const appRoutes: Routes = [
  { path: '', component: ListComponent },
  { path: 'create', component: NoteCreatorComponent },
  { path: 'edit/:id', component: NoteEditorComponent },
  { path: 'details/:id', component: NoteDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
