class Notes {
  constructor() {
    this.list = [];
  }
  create(text) {
    this.list.push({ title: this.title(text), content: text });
    // console.log(this.list)
  }
  title(text) {
    // console.log(text.slice(0, 20));
    return text.slice(0, 20);
  }
  list() {
    return this.list;
  }
}



// const firstTest = () => {
//   const note = new Notes('Test');
//   if(note.title('Test Note') === ('Test Note')) {
//     element.innerText = 'Create Note Test ----> Passed'
//   } else {
//     element.innerText = 'Create Note Test ----> Failed'
//   };
// }


// const element = document.getElementById("first-test")
// element.addEventListener("click", firstTest)
