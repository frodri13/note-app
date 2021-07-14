verify("Notes", function () {
  // it("slices the content of the note by 20 characters", function () {
  //   let notes = new Notes();
  //   notes.create(
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione totam dignissimos molestiae incidunt eum illum ipsum distinctio provident possimus!"
  //   );
  //   checkIf(notes.title(notes.list[0].title).length).is(20);
  // });

  it("can store a list of notes", function () {
    let notes = new Notes();
    notes.create("hello");

    checkIf(notes.list[0].content).is("bye");
  });
});
