document.addEventListener("DOMContentLoaded", () => {
  const notes = new Notes();
  const input = document.querySelector("#note-input");
  const submitButton = document.querySelector("#submit");
  const titles = document.querySelectorAll(".note-title");
  const noteContent = document.querySelectorAll(".note-content");
  const clearAllButton = document.querySelector("#clear-all");
  const notesList = document.querySelector(".notes-list");

  getNotes();

  // Shows/hides the note content when clicking title
  // titles.forEach(function (title, index) {
  //   title.addEventListener("click", () => {
  //     noteContent[index].classList.toggle("hide");
  //   });
  // });

  // After clicking newNote a new div element will be added to the DOM
  // It will have a title, textarea and submit button

  submitButton.addEventListener("click", () => {
    if (input.value === "") {
      return;
    }
    notes.create(input.value);
    // const notesList = document.querySelector(".notes-list");

    let newTitle = document.createElement("h4");
    newTitle.classList.add("note-title");
    if (notes.title(input.value).length >= 20) {
      newTitle.innerText = `${notes.title(input.value)}...`;
    } else {
      newTitle.innerText = `${notes.title(input.value)}`;
    }
    notesList.appendChild(newTitle);

    let clearButton = document.createElement("button");
    clearButton.classList.add("clear");
    clearButton.classList.add("button");
    clearButton.innerText = "Clear";
    notesList.appendChild(clearButton);

    let noteBody = document.createElement("input");
    noteBody.classList.add("note-content");
    noteBody.classList.add("hide");
    noteBody.value = input.value;
    notesList.appendChild(noteBody);
    saveNotes(input.value);

    input.value = "";

    newTitle.addEventListener("click", () => {
      noteBody.classList.toggle("hide");
    });
  });

  function saveNotes(note) {
    let notes;
    if (localStorage.getItem("saved-notes") === null) {
      notes = [];
    } else {
      notes = JSON.parse(localStorage.getItem("saved-notes"));
    }
    notes.push(note);
    localStorage.setItem("saved-notes", JSON.stringify(notes));
  }

  function getNotes() {
    let savedNotes;
    if (localStorage.getItem("saved-notes") === null) {
      savedNotes = [];
    } else {
      savedNotes = JSON.parse(localStorage.getItem("saved-notes"));
    }

    savedNotes.forEach(function (note) {
      const notes = new Notes();
      notes.create(note);

      // const notesList = document.querySelector(".notes-list");

      let newTitle = document.createElement("h4");
      newTitle.classList.add("note-title");
      if (notes.title(note).length >= 20) {
        newTitle.innerText = `${notes.title(note)}...`;
      } else {
        newTitle.innerText = `${notes.title(note)}`;
      }
      notesList.appendChild(newTitle);

      let clearButton = document.createElement("button");
      clearButton.classList.add("clear");
      clearButton.classList.add("button");
      clearButton.innerText = "Clear";
      notesList.appendChild(clearButton);

      let noteBody = document.createElement("input");
      noteBody.classList.add("note-content");
      noteBody.classList.add("hide");
      noteBody.value = note;
      notesList.appendChild(noteBody);

      newTitle.addEventListener("click", () => {
        noteBody.classList.toggle("hide");
      });

      clearButton.addEventListener("click", () => {
        console.log(newTitle);
        console.log(noteBody);
        console.log(note);
        localStorage.removeItem("note");
        // localStorage.removeItem("saved-notes");
        // notesList.removeChild(notesList.newTitle);
        // notesList.removeChild(notesList.noteBody);
      });
    });
  }


  const clearItems = document.querySelectorAll(".clear");
  console.log(clearItems);
  clearItems.forEach(function (button, index) {
    button.addEventListener("click", () => {
      console.log(`button ${index} clicked`);
      console.log(`title ${titles[index]}`)
      localStorage.removeItem(titles[index]);
      localStorage.removeItem(noteContent[index]);
    });
  });


  function clearAll() {
    localStorage.clear();
    while (notesList.firstChild) {
      notesList.removeChild(notesList.firstChild);
    }
  }

  clearAllButton.addEventListener("click", clearAll);
});
