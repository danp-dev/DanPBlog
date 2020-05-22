import React from "react"
import { Link } from "gatsby"
import TitleHeader from "./titleheader" 
import Footer from "./footer"

import LayoutStyles from "./layout.module.scss"



const Layout = ({ children }) => (
   <div>
<TitleHeader></TitleHeader>
   
    <div className={LayoutStyles.container}>
      
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built By Dan.P with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
      </div>
      <Footer />
    </div>
  )
  

export default Layout
