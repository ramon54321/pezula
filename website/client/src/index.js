import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import { observer } from "mobx-react"
import store from "./store.js"
import $ from "jquery"

import NavBar from './components/NavBar/navbar.js'
import SignUpForm from './components/SignUpForm/signupform.js'

import PageIndex from './components/PageIndex/pageindex.js'
import PageListings from './components/PageListings/pagelistings.js'
import PageServices from './components/PageServices/pageservices.js'
import PageEnquire from './components/PageEnquire/pageenquire.js'

const app = document.getElementById("app")

const Main = () => (
  <Router>
    <div>
      <NavBar />
      <Route path="/page/booking" component={PageIndex} />
      <Route path="/page/listings" component={PageListings} />
      <Route path="/page/services" component={PageServices} />
      <Route path="/page/enquire" component={PageEnquire} />
    </div>
  </Router>
)

//ReactDOM.render(<TodoList store={store}/>, app)
//<SignUpForm /> <IndexContent.PageIndex />PageListings

ReactDOM.render(<Main />, app)
