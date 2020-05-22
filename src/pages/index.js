import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import profilePic from "../images/Dan-Profile-Pic.jpg"
import sassLogo from "../images/sass-logo.png"
import gatsbyLogo from "../images/gatsby-logo.png"
import jsLogo from "../images/js-logo.png"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import LayoutStyles from "../pages/index.module.scss"

const BlogIndex = ({data}) => {
  const posts = data.allMarkdownRemark.edges
  
  return (
    <Layout>
    
      <SEO title="All posts" />
      <div className={LayoutStyles.hero}> 
      <img className={LayoutStyles.bioImage} src={profilePic} ></img>
      
      <h1>Dan P.</h1>
      <h3>Building awesome Dapps and websites.</h3>
   </div>
        <div className={LayoutStyles.twoCols}>
        <div className={LayoutStyles.twoEvenCols}>
          <h3>About Dan P.</h3>
          <p>Born and bred in a small country town in Australia, Dan has always had a passion for I.T. Having worked in the I.T industry for over 10 years Dan is experienced in all forms of I.T.</p>
        </div>
        <div className={LayoutStyles.twoEvenCols}>
          <h3>Contact</h3>
        <a href="https://twitter.com/_blockchaindude" target="_blank">
          <li>Twitter</li>
        </a>
        <a href="https://twitter.com/_blockchaindude" target="_blank">
          <li>Twitter</li>
        </a>
        <a href="https://twitter.com/_blockchaindude" target="_blank">
          <li>Twitter</li>
        </a>
        </div>
      </div>
      
      <div className={LayoutStyles.techUsedScrollContainer}>
        <div className={LayoutStyles.container}>
        <div><h2>Tech I Love use.</h2></div>
        <div ><img src={sassLogo}></img>
        <img src={jsLogo}></img>
        <img src={gatsbyLogo}></img>
        <img src={sassLogo}></img>
      </div>
      </div>
      </div>
      

      <div style={{textAlign:`center`}}>
        <h1>Latest Posts.</h1>
      </div>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex


export const pageQuery = graphql`
  query query2{
     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
 `