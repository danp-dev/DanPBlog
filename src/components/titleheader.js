import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import LayoutStyles from "./header.module.scss"
import logo from "../images/DanPDev-Logo.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBitcoin } from "@fortawesome/free-brands-svg-icons"



const TitleHeader = () => {
 const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)

 
  return (
      <div className={LayoutStyles.header}> 
        <div className={LayoutStyles.logo}>
        
        <Link
          to={`/`}
        >
        <img src={logo}></img>
        </Link>
        </div>
     


      <nav>

          <ul style={{listStyle:`none`, display:`flex`,justifyContent:`space-around`, padding:'0px'}}>
            <Link to="/blog-posts-page"><li>Blog</li></Link>
            <Link to="404"><li>About</li></Link>
            <Link to="404"><li>Contact</li></Link>
          </ul>
      </nav>
      
      
      <div className={LayoutStyles.mobilemenu} >
       <FontAwesomeIcon icon={faBitcoin} />
      </div>
      </div>
    )
  
        }
    
export default TitleHeader


