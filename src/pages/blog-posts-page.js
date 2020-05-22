import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import profilePic from "../images/profile-pic-new.jpg"
import sassLogo from "../images/sass-logo.png"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import LayoutStyles from "../pages/index.module.scss"

const BlogPostsPage = ({data}) => {
  const posts = data.allMarkdownRemark.edges
  
  return (
    <Layout>
    
      <SEO title="All posts" />
      
      <div style={{textAlign:`center`}}>
        <h1>Latest Posts.</h1>
      </div>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            
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

export default BlogPostsPage


export const pageQuery = graphql`
  query queryblogs{
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