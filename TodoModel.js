class TodoModel {
  constructor(title, completed) {
    this.title = title;
    this.completed = completed || false;
    this.createdAt = new Date();
  }
}

module.exports = TodoModel;
