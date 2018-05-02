import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-note-comments',
  templateUrl: './note-comments.component.html',
  styleUrls: ['./note-comments.component.css']
})
export class NoteCommentsComponent implements OnInit {
  @Input() comments;
  @Output() newComment = new EventEmitter();
  comment = {
    author: '',
    content: ''
  };
  constructor() { }

  ngOnInit() {
  }
  addComment(form) {
    if (form.invalid) {
      return;
    }
    const comment = {...this.comment, created_at: new Date()};
    console.log(comment);
    this.comment = {
      author: '',
      content: ''
    };
    this.newComment.emit(comment);
    form.resetForm();
  }
}
