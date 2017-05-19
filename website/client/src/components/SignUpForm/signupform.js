import React from 'react'
import ReactDOM from 'react-dom'
import { observer } from "mobx-react"
import { styles } from './signupform.sass'

@observer
class SignUpForm extends React.Component {
  render() {
    return (
      <div>
        <h2>Sign up form.</h2>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <input type="text" name="type" />
        <button onClick={() => {
          $.ajax({
            type: "POST",
            url: "/api/user",
            data: {
              username: $('input[name="username"]').val(),
              password: $('input[name="password"]').val(),
              type: $('input[name="type"]').val()
            },
            success: function (data) {
              console.log("Successful request.");
              console.log(data);
            }
          })
        }}>Submit</button>
      </div>
    )
  }
}

export default SignUpForm
