import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteCommentsComponent } from './note-comments.component';

describe('NoteCommentsComponent', () => {
  let component: NoteCommentsComponent;
  let fixture: ComponentFixture<NoteCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
