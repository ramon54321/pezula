require('./style.sass');
var cats = require('./cats.js');


class TodoStore {

  todoList = ["Buy Milk", "Sell Car"];

  constructor() {
    this.report();
  }

  addTodo(task) {
    this.todoList.push({
        task: task,
        completed: false,
      });
  }

  report() {
    if(this.todoList.length === 0) {
      console.log("No items in list.");
    } else {
      console.log("Items in list: " + todoList.length);
    }
  }

}

const todoStore = new TodoStore();


console.log(cats);
document.write(cats);
