document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#note-input");
  const submitButton = document.querySelector("#submit");
  const titles = document.querySelectorAll(".note-title");
  const noteContent = document.querySelectorAll(".note-content");
  const notes = new Notes();

  console.log(titles);
  console.log(noteContent);

  // titles.forEach(function (title) {
  //   console.log(title);
  //   // console.log(titles.indexOf(title));
  //   // trying to hide the input when clicking the title
  //   let i = 0;
  //   title.addEventListener("click", () => {
  //     console.log(title);
  //     // logic for when content is visible and logic for when it's hidden needed
  //     title.style = "background: red;";
  //     // noteContent.style = "background: red;";
  //     noteContent[i].style.display = "inline-block";
  //   });
  //   i++;
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
