

function NotesApplication(author) {
  this.author = author;
  this.list_of_notes = [];
}

NotesApplication.prototype.create = function (note_content) {
  if(typeof note_content === 'string' && note_content !== '') {
    this.list_of_notes.push(note_content);
  }
  else {console.log('Error! Argument has to be a non-empty string.');}
};

NotesApplication.prototype.listNotes = function () {
  if(this.list_of_notes == []) {console.log( "There are no notes in this list.");}
  else {
  	for(i=0; i < this.list_of_notes.length; i++) {
      console.log("Note ID: "+ i +"\n" + this.list_of_notes[i]+"\n\n"  +  "By Author "+this.author +'\n');
    }
  }
};

NotesApplication.prototype.get = function (note_id) {
  if(isPositiveInt(note_id)) {
    if(note_id < this.list_of_notes.length) {
      console.log(this.list_of_notes[note_id]);
    }
    else {console.log('Error! There is no note with the supplied ID.');}
  }
  else {console.log('Error! Argument has to be an integer > -1.');}
};

NotesApplication.prototype.delete = function (note_id) {
  if(isPositiveInt(note_id)) {
    if (note_id < this.list_of_notes.length) {
      this.list_of_notes.splice(note_id, 1);
    }
    else {console.log('Error! There is no note with the supplied ID.');}
  }
  else {console.log('Error! Argument has to be an integer > -1.');}
};

NotesApplication.prototype.edit = function(note_id, new_content){
  if(isPositiveInt(note_id) && typeof new_content === 'string') {
  	if (note_id < this.list_of_notes.length) {
      this.list_of_notes[note_id] = new_content;
  	}
    else {console.log('Error! There is no note with the supplied ID.');}
  }
  else {console.log('supplied arguments are of the wrong types(should be int and string respectively');}
};





function isPositiveInt(test_num) {
  if(typeof test_num === 'number' && test_num % 1 === 0 && test_num > -1 ) {return true;}
  else {return false;}
}





