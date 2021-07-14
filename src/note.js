class Notes {
  constructor() {
    this.list = [];
  }
  create(text) {
    this.list.push({ title: this.title(text), content: text });
  }
  title(text) {
    return text.slice(0, 20);
  }
  list() {
    return this.list;
  }
}
