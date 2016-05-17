function NotesApplication(author) {
  this.author = author;
  this.list_of_notes = []; 
};

NotesApplication.prototype.create = function (notes_to_add) {
  this.list_of_notes.append(notes_to_add);
};