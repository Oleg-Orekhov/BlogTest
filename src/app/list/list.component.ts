import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list = [];
  constructor(private notesService: NotesService ) {}

  ngOnInit() {
    this.notesService.currentNotes.subscribe((res) => {
      this.list = res;
    });
    this.notesService.getNotes();
  }
  deleteNote(id) {
    this.notesService.deleteNote(id);
  }
  saveAll() {
    this.notesService.saveData();
  }
  clearData() {
    this.notesService.clearData();
  }
}
