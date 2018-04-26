import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent implements OnInit {
  currentNote;
  noteId;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private notesService: NotesService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const note = this.notesService.getNote(id);
    this.noteId = id;
    this.currentNote = note;
  }
  addEdited() {
    this.notesService.updateNote(this.currentNote, this.noteId);
    this.goHome();
  }
  deleteNote() {
    this.notesService.deleteNote(this.noteId);
    this.goHome();
  }
  goHome() {
    this.router.navigate(['']);
  }
}
