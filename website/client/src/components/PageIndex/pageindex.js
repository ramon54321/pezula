import React from 'react'
import ReactDOM from 'react-dom'
import { observer } from "mobx-react"
import * as styles from './pageindex.sass'

export const IndexSection1 = () => (
  <div className={styles.pageSectionContainer + " " + styles.pageSection1}>
    <div className={styles.pageSubSectionContainer}>
      <div className={styles.pageTitle}>PEZULA</div>
      <div className={styles.pageTitleButtonContainer}>
        <div className={styles.buttonElegant}>LISTINGS</div>
        <div className={styles.buttonElegant}>ENQUIRE</div>
      </div>
    </div>
  </div>
)

export const IndexSection2 = () => (
  <div className={styles.pageSectionContainer + " " + styles.pageSection2}>
    <div className={styles.pageSubSectionContainer}>
      <div className={styles.pageSectionTitle}>WHAT WE DO</div>
      <img src="/images/diagram1.png" width="100%" style={{maxWidth: 1268 + "px"}} className={styles.centerImage + " " + styles.imagePadding}/>
      <p>At let vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
    </div>
  </div>
)

export const IndexSection3 = () => (
  <div className={styles.pageSectionContainer + " " + styles.pageSection3}>
    <div className={styles.pageSubSectionContainer}>
      <div className={styles.pageSectionTitle}>FEATURED LISTINGS</div>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
      <p>Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>
      <div>

      </div>
    </div>
  </div>
)

@observer
class PageIndex extends React.Component {
  render() {
    return (
      <div>
        <IndexSection1 />
        <IndexSection2 />
        <IndexSection3 />
      </div>
    )
  }
}

export default PageIndex
