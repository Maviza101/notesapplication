function NotesApplication(author) {
  this.author = author;
  this.list_of_notes = [];
}

NotesApplication.prototype.create = function(note_content) {
  if(typeof note_content === 'string' && note_content !== '') {
    this.list_of_notes.push(note_content);
  }
  else {return('Error! Argument has to be a non-empty string.');}
};

NotesApplication.prototype.listNotes = function() {
  if(this.list_of_notes == []) {
    return( "There are no notes in this list.");
  }
  else {
    /*return all the notes in list_of_notes as a string*/
    var all_notes = '';
  	for(i=0; i < this.list_of_notes.length; i++) {
      all_notes += "Note ID: "+ i +"\n" + this.list_of_notes[i]+"\n\n"  +  "By Author "+this.author +'\n\n';
    }
    return all_notes;
  }
};

NotesApplication.prototype.search = function(query_string) {
  if(typeof query_string === 'string' && query_string !== '') {
    matched_notes = [];
    for(i=0; i < this.list_of_notes.length; i++) {
      if( contains(this.get(i), query_string) ) {
        matched_notes.push(i);
      }
    }
    return('Showing results for search query: ' + query_string);
    if (matched_notes === []) return('No matches found.');
    else {
      for(i=0; i < matched_notes.length; i++) {
        this.get(matched_notes[i]);
      }
    }
  }
  else {
     return('Error! Argument must be a non-empty string.');
    }
};

NotesApplication.prototype.get = function(note_id) {
  if(isPositiveInt(note_id)) {
    if(note_id < this.list_of_notes.length) {
      return(this.list_of_notes[note_id]);
    }
    else {
      return('Error! Argument is more than the total number of notes stored.');
    }
  }
  
  else {
    return('Error! Argument has to be an integer > -1.');
  }
};

/*
method delete() requires some thought, coz if we delete note x, we 
need to decrement the index of all the notes to its right, and consequently,
their note_id. Thankfully, how I used splice() takes care of that.
*/
NotesApplication.prototype.delete = function(note_id) {
  if(isPositiveInt(note_id)) {
    if (note_id < this.list_of_notes.length) {
      this.list_of_notes.splice(note_id, 1);
    }
    else {
      return('Error! Argument is more than the total number of notes stored.');
    }
  }
  else {
    return('Error! Argument has to be an integer > -1.');
  }
};

NotesApplication.prototype.edit = function(note_id, new_content){
  if(isPositiveInt(note_id) && typeof new_content === 'string') {
  	if (note_id < this.list_of_notes.length) {
      this.list_of_notes[note_id] = new_content;
  	}
    else {
      return('Error! Argument is more than the total number of notes stored.');
    }
  }
  else {
    return('Supplied arguments are of the wrong types (should be a positive int and string respectively).');
  }
};


/*all helper/worker functions below*/



function contains(to_search, query) {
  var first_char = query[0];
  var is_found = false;
  for(i=0; i < to_search.length; i++) {
    if (to_search[i] === first_char) {
      var j = 1;
      while (j < query.length) {
        if ( to_search[i+1] === query[j] ) continue;
        if ( j == query.length) {
          is_found = true;

        }
      }
    }
    if(is_found) break;
  }
  return is_found;
}

function isPositiveInt(test_num) {
  if(typeof test_num === 'number' && test_num % 1 === 0 && test_num > -1 ) {return true;}
  else {return false;}
}





