// function verify(suiteName, fn) {
//   try {
//     console.log(`suite: ${suiteName}`);
//     fn();
//   } catch (err) {
//     console.log(err.mesage);
//   }
// };

// verify("Notes", function () {
//   it("slices the content of the note by 20 characters", function () {
//     let notes = new Notes();
//     notes.create(
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione totam dignissimos molestiae incidunt eum illum ipsum distinctio provident possimus!"
//     );
//     checkIf(notes.title(notes.list[0].title).length).is(20);
//   });

//     it("can store a list of notes", function () {
//       let notes = new Notes();
//       notes.create("hello");

//       checkIf(notes.list[0].content).is("bye");
//     });
// });
const note = new Notes();

const firstTest = () => {
  if(note.title('Test Note') === ('Test Note')) {
    first.innerText = 'Create Note Test ----> Passed'
  } else {
    first.innerText = 'Create Note Test ----> Failed'
  };
}

const secondTest = () => {
  if(note.title('Lorem ipsum dolor sit amet, consectetur adipis') === ('Lorem ipsum dolor sit')) {
    second.innerText = 'Reduce note test ----> Passed'
  } else {
    second.innerText = 'Reduce note test ----> Failed'
  };
}

const first = document.getElementById("first-test")
const second = document.getElementById("second-test")
first.addEventListener("click", firstTest)
second.addEventListener("click", secondTest)

