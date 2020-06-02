import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitterSquare , faGithubSquare } from "@fortawesome/free-brands-svg-icons"

import LayoutStyles from "../pages/index.module.scss"

const BlogIndex = ({data}) => {
  const posts = data.allMarkdownRemark.edges
  
  return (
    <Layout>
    
      <SEO title="All posts" />
      <div className={LayoutStyles.hero}> 
      <Image
        fixed={data.danpic.childImageSharp.fixed}
        alt={"Picture Of Dan P at his computer - A Web and Blockchain Developer"}
        style={{
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
          
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
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
          <div className={LayoutStyles.socialicons}>
        <a href="https://twitter.com/danpdev" target="_blank">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
        <a href="https://github.com/danp-dev" target="_blank">
        <FontAwesomeIcon icon={faGithubSquare} />
        </a>
        </div>
        </div>
      </div>
      
      <div className={LayoutStyles.techUsedScrollContainer}>
        <div className={LayoutStyles.container}>
        <div><h2>Tech I Use.</h2></div>
        <div className={LayoutStyles.techUsedScrollImages}>
        <Image fixed={data.jspic.childImageSharp.fixed} style={{margin:'1rem'}}/>
<Image fixed={data.sasspic.childImageSharp.fixed} style={{margin:'1rem'}}/>
<Image fixed={data.reactpic.childImageSharp.fixed} style={{margin:'1rem'}}/>
      </div>
      <div>
      
      </div>

      </div>
      <div className={LayoutStyles.container}>
        <div><h2>Hardware I Use</h2></div>
        <div>
<Image fixed={data.jspic.childImageSharp.fixed} style={{margin:'1rem'}} />
<Image fixed={data.reactpic.childImageSharp.fixed} style={{margin:'1rem'}} />

      </div>
      </div>
      </div>
      

      <div style={{textAlign:`center`}}>
        <h1>Latest Posts.</h1>
      </div>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug} className={LayoutStyles.articles}>
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
    danpic: file(relativePath: {eq: "Dan-Profile-Pic.jpg"}) {
        id
        childImageSharp {
          fixed(width: 200 , height: 200) {
                ...GatsbyImageSharpFixed
        }
      }
    }
    sasspic: file(relativePath: {eq: "DanPDev-Sass-Logo.png"}) {
      id
      childImageSharp {
        fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
      }
    }
  }
  jspic: file(relativePath: {eq: "DanPDev-JS-Logo.png"}) {
    id
    childImageSharp {
      fixed(width: 200 , height: 200) {
            ...GatsbyImageSharpFixed
    }
  }
}
reactpic: file(relativePath: {eq: "DanPDev-React-Logo.png"}) {
  id
  childImageSharp {
    fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
  }
}
}
}
 `