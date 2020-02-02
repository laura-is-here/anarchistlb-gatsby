import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Button from "../components/button"
import EventCardGrid from "../components/eventcardgrid"
import SEO from "../components/seo"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0 4% 3rem;

  @media screen and (min-width: 85.375rem) {
    flex-wrap: nowrap;

    > * + * {
      margin: 1.5rem;
    }
  }

  @media screen and (min-width: 120rem) {
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
          <div>
            <h1>
              {frontmatter.headline}
              <small>
                <br />
                {frontmatter.subHeadline}
              </small>
            </h1>
            <small>{frontmatter.date}</small>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <EventCardGrid eventDetails={data.allMarkdownRemark} />
        </Container>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <SEO title={frontmatter.title} />
        <Container>
          <div>
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
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <Link to="/events/">
              <Button>Back to all events</Button>
            </Link>
          </div>
          <EventCardGrid eventDetails={data.allMarkdownRemark} />
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
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: "events" } } }
      limit: 2
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
