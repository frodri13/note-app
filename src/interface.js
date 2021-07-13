const title = document.querySelector('#note-title');
const content = document.querySelector('#note-content');
const submitButton = document.querySelector('#submit');
const newNote = document.querySelector('#new-note');

title.addEventListener('click', () => {
  content.style = "display: inline-block;";
  submitButton.style = "display: inline-block;";
});
