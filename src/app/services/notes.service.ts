import {EventEmitter, Injectable} from '@angular/core';
import {Router} from '@angular/router';


@Injectable()
export class NotesService {
  notes = [
    {
      name: 'title1',
      content: 'text1',
      storage: 0
    },
    {
      name: 'title2',
      content: 'text2',
      storage: 0
    },
    {
      name: 'title3',
      content: 'text3',
      storage: 1
    },
    {
      name: 'title4',
      content: 'text4',
      storage: 1
    }
  ];
  currentNotes = new EventEmitter<any>();
  currentNotesChanged = new EventEmitter<any>();


  constructor(private router: Router) {
  }
  getNotes() {
    this.currentNotes.emit(this.notes);
  }
  getNote(id) {
    const note = this.notes[id];
    return note;
  }
  updateNote(note, id) {
    this.notes[id] = note;
    return;
  }
  createNote(note) {
    this.notes.push(note);
  }
  deleteNote(id) {
    const notes = this.notes.filter(function (elm, index) {
      return index !== id ? true : false;
    });
    this.notes = notes;
    this.currentNotes.emit(this.notes);
  }
}
