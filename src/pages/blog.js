import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import CardGrid from "../components/cardgrid"
import SEO from "../components/seo"

const Container = styled.div`
  margin: 0 4% 3rem;

  @media screen and (min-width: 64rem) {
    margin: 0 6% 3rem;
  }

  @media screen and (min-width: 85.375rem) {
    margin: 0 8% 3rem;
  }

  @media screen and (min-width: 120rem) {
    margin: 0 12% 3rem;
  }
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <h1>Blog Posts</h1>
        <CardGrid postDetails={data.allMarkdownRemark} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: "blog" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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
