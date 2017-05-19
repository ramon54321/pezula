require('./style.sass')
import React from 'react'
import ReactDOM from 'react-dom'
import { observer } from "mobx-react"
import store from "./store.js"
import $ from "jquery"

import NavBar from './components/NavBar/navbar.js'
import SignUpForm from './components/SignUpForm/signupform.js'

const app = document.getElementById("app")

@observer
class TodoList extends React.Component {
  render() {
    return <p>Hello Mr {this.props.store.name}.</p>
  }
}

const UserSignUp = () => (
  <div>
    <NavBar />
    <div className="pageSectionContainer">
      <div className="pageSubSectionContainer">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
      </div>
    </div>
  </div>
)

//ReactDOM.render(<TodoList store={store}/>, app)
//<SignUpForm />

ReactDOM.render(<UserSignUp />, app)
