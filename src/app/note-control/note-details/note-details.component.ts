import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {
  currentNote;
  constructor(private router: ActivatedRoute, route: Router, private notesService: NotesService) { }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    let note = this.notesService.getNote(id);
    this.notesService.currentNote.subscribe((res) => {
      note = res;
    });
    this.currentNote = note;
  }
  addComment(comment) {
    this.notesService.addComment(comment, this.currentNote.id);
  }

}
