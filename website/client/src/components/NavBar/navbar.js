import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { observer } from "mobx-react"
import * as styles from './navbar.sass'

@observer
class NavBar extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.navbarDisplacer}></div>
        <div className={styles.navbarContainer}>
          <div className={styles.navButtonLogo}><img src="/images/logo.png" className={styles.navButtonLogo}></img></div>
          <div className={styles.navButtonContainer}><Link to="/page/booking"><div className={styles.navButton}>BOOKING</div></Link></div>
          <div className={styles.navButtonContainer}><Link to="/page/listings"><div className={styles.navButton}>LISTINGS</div></Link></div>
          <div className={styles.navButtonContainer}><Link to="/page/services"><div className={styles.navButton}>SERVICES</div></Link></div>
          <div className={styles.navButtonContainer}><Link to="/page/enquire"><div className={styles.navButton}>ENQUIRE</div></Link></div>
          <div className={styles.navButtonContainer}><Link to="/page/login"><div className={styles.navButton}>
            <i className="fa fa-sign-in fa-lg" aria-hidden="true" style={{marginRight: 1.5 + 'ch', marginBottom: 1 + 'em'}}></i>LOG IN</div></Link></div>
        </div>
      </div>
    )
  }
}

export default NavBar
