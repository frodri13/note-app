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
