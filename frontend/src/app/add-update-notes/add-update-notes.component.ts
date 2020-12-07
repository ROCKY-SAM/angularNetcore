import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
@Component({
  selector: 'app-add-update-notes',
  templateUrl: './add-update-notes.component.html',
  styleUrls: ['./add-update-notes.component.css']
})
export class AddUpdateNotesComponent implements OnInit {
  @Output() noteCreated = new EventEmitter<any>();
  @Input() note: any;
  @Output() newClicked = new EventEmitter<any>();
  constructor() {
    this.clearNotes();
  }
  ngOnInit() {

  }

  clearNotes() {
    this.note = {
            title: '',
      description:''
    };
  }
  addUpdateNote = function (event) {
    this.noteCreated.emit(this.note);
    this.clearNotes();
   }
  new() {
    this.newClicked.emit();
  }


}
