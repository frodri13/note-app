document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#note-input");
  const submitButton = document.querySelector("#submit");
  const titles = document.querySelectorAll(".note-title");
  const noteContent = document.querySelectorAll(".note-content");
  const notes = new Notes();

  console.log(titles);
  console.log(noteContent);

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
    noteBody.value = input.value;
    notesList.appendChild(noteBody);

    input.value = "";

    newTitle.addEventListener("click", function () {
      newTitle.style = "background: red";
    });
  });
});
