import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  margin: 0 4% 3rem;

  @media screen and (min-width: 64rem) {
    margin: 0 14% 3rem;
  }

  @media screen and (min-width: 85.375rem) {
    margin: 0 20% 3rem;
  }

  @media screen and (min-width: 120rem) {
    margin: 0 24% 3rem;
  }
`

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  if (!frontmatter.eventDate) {
    return (
      <Layout>
        <SEO title={frontmatter.title} />
        <Container>
          <h1>
            {frontmatter.headline}
            <small>
              <br />
              {frontmatter.subHeadline}
            </small>
          </h1>
          <small>{frontmatter.date}</small>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <SEO title={frontmatter.title} />
        <Container>
          <h1>
            {frontmatter.headline}
            <small>
              <br />
              {frontmatter.subHeadline}
            </small>
          </h1>
          <small>Posted: {frontmatter.date}</small>
          <div className="padding--lg    bg--black banner-img--anarchy">
            <h2>Event Details</h2>
            <ul className="ul-no-bullets    h3">
              <li>Date: {frontmatter.eventDate}</li>
              <li>
                Time: {frontmatter.eventStart} - {frontmatter.eventEnd}
              </li>
              <li>Location: {frontmatter.eventLocation}</li>
            </ul>
          </div>
          {/* <ul className="ul-no-bullets    flex-container">
              <li className="padding-right--md">
                <small>Tags: </small>
              </li>
              {frontmatter.tags.map(tag => (
                <li key="tags" className="padding-right--md">
                  <small>{tag} </small>
                </li>
              ))}
            </ul> */}
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <small>
            <Link to="/events/">Back to all events</Link>
          </small>
        </Container>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
    }
  }
`
