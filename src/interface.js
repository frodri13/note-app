const input = document.querySelector("#note-input");
const submitButton = document.querySelector("#submit");
const title = document.querySelectorAll(".note-title");
const noteContent = document.querySelectorAll(".note-content");
// const notes;
document.addEventListener("DOMContentLoaded", () => {
  const notes = new Notes();

  // title.addEventListener("click", () => {
  //   // logic for when content is visible and logic for when it's hidden needed
  //   noteContent.style = "display: inline-block;";
  // });

  // After clicking newNote a new div element will be added to the DOM
  // It will have a title, textarea and submit button

  submitButton.addEventListener("click", () => {
    if (input.value === "") {
      return;
    }
    notes.create(input.value);
    const notesList = document.querySelector(".notes-list");

    let newTitle = document.createElement("h4");
    newTitle.classList.add("note-title");
    newTitle.innerText = `${notes.title(input.value)}...`;
    notesList.appendChild(newTitle);

    let noteBody = document.createElement("input");
    noteBody.classList.add("note-content");
    noteBody.value = input.value;
    notesList.appendChild(noteBody);

    input.value = "";
  });
});
