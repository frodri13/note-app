var note = new Notes('Test');

if(note.title('Test Note') === ('Test Note')) {
  console.log('Create Note Test ----> Passed');
} else {
  console.log('Create Note Test ----> Failed');
};