import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.css']
})
export class NoteCreatorComponent implements OnInit {
  currentNote = {
    name: '',
    content: '',
    storage: 0
  };
  constructor(private notesService: NotesService,
              private router: Router) { }

  ngOnInit() { }
  addCreated(form) {
    if (form.invalid) {
      return;
    }
    this.notesService.createNote(this.currentNote);
    this.router.navigate(['']);
  }
}
