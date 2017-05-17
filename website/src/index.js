require('./style.sass')

import React from 'react'
import ReactDOM from 'react-dom'

import { observer } from "mobx-react"
import store from "./store.js"

const app = document.getElementById("app")

@observer
class TodoList extends React.Component {
  render() {
    return <p>Hello Mr {this.props.store.name}.</p>
  }
}

ReactDOM.render(<TodoList store={store}/>, app)
