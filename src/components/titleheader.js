import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import LayoutStyles from "./header.module.scss"


const TitleHeader = () => {
  const x = 1;
const data = useStaticQuery(graphql`
query {    
site {
      siteMetadata {
        title
      }
    }
  }
` )

  return (
      <div className={LayoutStyles.header}>
        <h1>      
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
         {data.site.siteMetadata.title}
          
        </Link>
      </h1>
      
     


      <nav>
          <ul style={{listStyle:`none`, display:`flex`,justifyContent:`space-around`}}>
            <Link to="/blog-posts-page"><li>Blog</li></Link>
            <Link to="404"><li>About</li></Link>
            <Link to="404"><li>Contact</li></Link>
          </ul>
      </nav>
      </div>
    )
  
        }
    
export default TitleHeader
