require('./style.sass')
import React from 'react'
import ReactDOM from 'react-dom'
import { observer } from "mobx-react"
import store from "./store.js"
import $ from "jquery"

const app = document.getElementById("app")

@observer
class TodoList extends React.Component {
  render() {
    return <p>Hello Mr {this.props.store.name}.</p>
  }
}

const UserSignUp = () => (
  <div>
    <h2>Sign up form.</h2>
    <input type="text" name="username" />
    <input type="password" name="password" />
    <button onClick={() => {

      var username = $('input[name="username"]').val()
      var password = $('input[name="password"]').val()

      $.ajax({
        type: "POST",
        url: "/api/person/add",
        data: {
          username: username,
          password: password
        },
        success: function (data) {
          console.log("Successful request.");
          console.log(data);
        }
      })
    }}>Submit</button>
  </div>
)

//ReactDOM.render(<TodoList store={store}/>, app)

ReactDOM.render(<UserSignUp />, app)
