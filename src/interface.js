document.addEventListener("DOMContentLoaded", () => {
  const notes = new Notes();
  const input = document.querySelector("#note-input");
  const submitButton = document.querySelector("#submit");
  const titles = document.querySelectorAll(".note-title");
  const noteContent = document.querySelectorAll(".note-content");

  // Shows/hides the note content when clicking title
  titles.forEach(function(title, index) {
    title.addEventListener("click", () => {
      noteContent[index].classList.toggle("hide");
    });
  });

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
    if (notes.title(input.value).length >= 20) {
      newTitle.innerText = `${notes.title(input.value)}...`;
    } else {
      newTitle.innerText = `${notes.title(input.value)}`;
    }
    notesList.appendChild(newTitle);

    let noteBody = document.createElement("input");
    noteBody.classList.add("note-content");
    noteBody.classList.add("hide");
    noteBody.value = input.value;
    notesList.appendChild(noteBody);

    input.value = "";

    newTitle.addEventListener("click", () => {
      noteBody.classList.toggle("hide");
    });
  });
});
