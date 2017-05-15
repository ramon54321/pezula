import { observable } from "mobx"

class Store {
  @observable name = "John"
}

var store = window.store = new Store

export default store
