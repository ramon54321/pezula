require('./style.sass')
var cats = require('./cats.js')
import React from 'react'


class TodoStore {

  constructor() {
    console.log("Built...");
  }

}

const todoStore = new TodoStore();


console.log(cats);
document.write(cats);
