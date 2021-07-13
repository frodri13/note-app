const title = document.querySelector("#note-title");
const content = document.querySelector("#note-content");
const submitButton = document.querySelector("#submit");
const newNote = document.querySelector("#new-note");

title.addEventListener("click", () => {
  content.style = "display: inline-block;";
  submitButton.style = "display: inline-block;";
});

// After clicking newNote a new div element will be added to the DOM
// It will have a title, textarea and submit button

newNote.addEventListener("click", () => {
  container = document.querySelector(".container");
  let newContainer = document.createElement("div");
  newContainer.setAttribute("class", "note-container");

  let newTitle = document.createElement("h3");
  newTitle.innerHTML = "hello";
  newTitle.setAttribute("id", "note-title");
  newTitle.setAttribute("class", "note-title");

  let newTextArea = document.createElement("textarea");
  newTextArea.setAttribute("id", "note-content");
  newTextArea.setAttribute("class", "note-content");
  newTextArea.setAttribute("cols", "30");
  newTextArea.setAttribute("rows", "10");
  newTextArea.setAttribute("placeholder", "Write A Note");

  let newButton = document.createElement("button");
  newButton.setAttribute("id", "submit");
  newButton.setAttribute("class", "submit button");
  newButton.innerHTML = "Submit";

  container.appendChild(newContainer);
  newContainer.appendChild(newTitle);
  newContainer.appendChild(newTextArea);
  newContainer.appendChild(document.createElement("br"));
  newContainer.appendChild(newButton);
});
