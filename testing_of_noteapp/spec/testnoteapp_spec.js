describe("An app for taking notes", function() {
  na = new NotesApplication('Folusho');
  na.create('First');
  var num_of_notes = 1;
  
  it("create method should be implemented", function() {
    expect(na.create).toBeDefined();
  });
 
  it("get method should be implemented", function() {
    expect(na.get).toBeDefined();
  });
  
  it("listNotes method should be implemented", function() {
    expect(na.listNotes).toBeDefined();
  });
  
  it("edit method should be implemented", function() {
    expect(na.edit).toBeDefined();
  });
  
  it("delete method should be implemented", function() {
    expect(na.delete).toBeDefined();
  });
  
  it('should be a list', function() {
    expect(typeof na.list_of_notes).toBe(typeof []);
  });
  
  it('should contain ' + num_of_notes +' note(s)', function() {
    expect(na.list_of_notes.length).toBe(num_of_notes);
  });
  
  it('should print undefined', function() {
    expect(na.list_of_notes[3]).toBeUndefined();
  });
  
  it('should print undefined', function() {
    expect(na.list_of_notes['ghjk']).toBeUndefined();
  });
  
  it('should print undefined', function() {
    expect(na.list_of_notes[false]).toBeUndefined();
  });
  
  //test some notes
  na.create('Second');
  num_of_notes++;
  it('should print Second', function() {
    expect(na.list_of_notes[1]).toBe('Second');
  });
  
  na.edit(0, 'Firstly');
  it('should print Firstly', function() {
    expect(na.list_of_notes[0]).toBe('Firstly');
  });
  
  na.delete(0);
  num_of_notes--;
  it('should be 1 note', function() {
    expect(na.list_of_notes.length).toBe(1);
  });

});
