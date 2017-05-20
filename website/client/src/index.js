require('./style.sass')
import React from 'react'
import ReactDOM from 'react-dom'
import { observer } from "mobx-react"
import store from "./store.js"
import $ from "jquery"

import NavBar from './components/NavBar/navbar.js'
import SignUpForm from './components/SignUpForm/signupform.js'

import * as Content from "./content/index.js"

const app = document.getElementById("app")

const UserSignUp = () => (
  <div>
    <NavBar />
    <Content.Section1 />
    <Content.Section2 />
    <Content.Section3 />
  </div>
)

//ReactDOM.render(<TodoList store={store}/>, app)
//<SignUpForm />

ReactDOM.render(<UserSignUp />, app)
