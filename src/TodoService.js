import Realm from 'realm';
import TodoModel from './TodoModel';

let repository = new Realm({
  schema: [{name: 'Todo', primaryKey: 'id', properties: {id: {type: 'string', indexed: true}, title: 'string', completed: 'bool', createdAt: 'date', updatedAt: 'date'}}]
});

let TodoService = {
  findAll: function(sortBy) {
    if (!sortBy) sortBy = [['completed', false], ['updatedAt', true]];
    return repository.objects('Todo').sorted(sortBy);
  },

  save: function(todo) {
    if (TodoService.findAll().filtered("title = '" + todo.title + "'").length) return;

    repository.write(() => {
      todo.updatedAt = new Date();
      repository.create('Todo', todo);
    })
  },

  update: function(todo, fn) {
    if (!fn) return;
    repository.write(() => {
      fn();
      todo.updatedAt = new Date();
    });
  }
};

TodoService.save(new TodoModel('Hello Koding'));
TodoService.save(new TodoModel('Make a Todo App with React Native'));
TodoService.save(new TodoModel('Check to complete a todo'));
TodoService.save(new TodoModel('Long press, drag and drop a todo to sort'));
TodoService.save(new TodoModel('Save data with Realm'));
TodoService.save(new TodoModel('Sync data with Firebase'));

module.exports = TodoService;
