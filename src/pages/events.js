import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Events" />
      <ul className="padding--lg    ul-no-bullets    grid-container">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id} className="padding--lg    bg--black">
            <h2>
              <Link className="anchor--light" to={node.fields.slug}>
                {node.frontmatter.headline}
                <small>
                  <br />
                  {node.frontmatter.subHeadline}
                </small>
              </Link>
            </h2>
            <small>Posted: {node.frontmatter.date}</small>
            <p>{node.excerpt}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: "events" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            tags
            subHeadline
            path
            img_alt
            img
            eventStart
            eventLocation
            headline
            eventEnd
            eventDate
            date(formatString: "DD MMMM, YYYY")
            author
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
