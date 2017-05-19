import React from 'react'
import ReactDOM from 'react-dom'
import { observer } from "mobx-react"
import { styles } from './navbar.sass'

@observer
class NavBar extends React.Component {
  render() {
    return (
      <div>
        <div className="navbarDisplacer"></div>
        <div className="navbarContainer">
          <div className="navButtonLogo"><img src="images/logo.png" className="navButtonLogo"></img></div>
          <div className="navButtonContainer"><div className="navButton">BOOKING</div></div>
          <div className="navButtonContainer"><div className="navButton">LISTINGS</div></div>
          <div className="navButtonContainer"><div className="navButton">SERVICES</div></div>
          <div className="navButtonContainer"><div className="navButton">ENQUIRE</div></div>
        </div>
      </div>
    )
  }
}

export default NavBar
