import React from "react"
import { Link, useStaticQuery, graphql} from "gatsby"

import LayoutStyles from "./footer.module.scss"

const Footer = () => {
  return(
  <div className={LayoutStyles.footerdiv}>
        
          <h4>© {new Date().getFullYear()}, Built By Dan.P</h4>
          
      <nav >
          <ul>
            <Link to=""><li>GitHub</li></Link>
            <Link to=""><li>LinkedIn</li></Link>
            <Link to=""><li>Contact</li></Link>
          </ul>
          
      </nav>
 
      </div>
    )
}
export default Footer
