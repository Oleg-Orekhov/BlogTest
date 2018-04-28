import {EventEmitter, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {isNull, isUndefined} from 'util';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class NotesService {
  notes;
  currentNotes = new EventEmitter<any>();
  currentNotesChanged = new EventEmitter<any>();


  constructor(private router: Router, private http: HttpClient) {
    this.currentNotesChanged.subscribe((res) => {
      this.notes = res;
      this.currentNotes.emit(this.notes);
    });

  }
  getNotes() {
    this.currentNotes.emit(this.notes);
  }
  getNote(id) {
    const note = this.findNote(id);
    return note;
  }
  updateNote(updatedNote) {
    let note = this.findNote(updatedNote.id);
    note = updatedNote;
    this.currentNotesChanged.emit(this.notes);
    return;
  }
  createNote(note) {
    note.id = this.getUid();
    if (!this.notes) {  // if notes is not initialized then init it as array.
      this.notes = [];
    }
    console.log(this.notes);
    this.notes.push(note);
  }
  deleteNote(id) {
    const notes = this.notes.filter(function (elm) {
      return elm.id !== id;
    });
    this.notes = notes;
    this.currentNotes.emit(this.notes);
  }
  saveData() {
    const localData = [];
    const firebaseData = [];
    this.notes.forEach((elm) => {
      if (elm.storage === 0) {
        localData.push(elm);
      } else {
        firebaseData.push(elm);
      }
    });
    const localDataJSON = JSON.stringify(localData);
    localStorage.setItem('data', localDataJSON);
    const firebase = this.http.put('https://blog-test-7093f.firebaseio.com/notes.json', firebaseData);
    firebase.subscribe((res) => {
    });
  }
  loadData() {
    const localNotes = JSON.parse(localStorage.getItem('data'));
    const firebase = this.http.get('https://blog-test-7093f.firebaseio.com/notes.json');

    firebase.subscribe((firebaseNotes) => {
      let notes;
      if (localNotes) {
        notes = localNotes.concat(firebaseNotes);
      } else {
        notes = firebaseNotes;
      }
      this.currentNotesChanged.emit(notes);
    });
  }
  addComment(comment, id) {
    const note = this.findNote(id);
    if (!note.comments) {
      note.comments = [];
    }
    note.comments.push(comment);
  }
  getUid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
  clearData() {
    localStorage.removeItem('data');
    this.http.put('https://blog-test-7093f.firebaseio.com/notes.json', {}).subscribe(res => {
      this.currentNotesChanged.emit([]);
    });
  }
  findNote(id) {
    const note = this.notes.find((elm) => {
      if (elm.id === id) {
        return true;
      }
    });
    return note;
  }
}
