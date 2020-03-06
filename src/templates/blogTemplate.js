import React from "react"
import { Link, graphql, navigate } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Button from "../components/button"
import EventCardGrid from "../components/eventcardgrid"
import SEO from "../components/seo"
import anarchyBackdrop from "../assets/images/a-backdrop.png"

const BannerImg = styled.ul`
  border-radius: 5px;
  list-style: none;
  color: var(--main-bg);
  background-color: var(--dark-bg);
  padding: 0 0 0.5rem;
  margin: 0;
  display: column;
  flex-wrap: wrap;
  font-weight: bold;
  line-height: 1.35;

  > li {
    padding: 0.25rem 1.5rem 0;
  }
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0 4% 3rem;

  @media screen and (min-width: 64rem) {
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
          <div>
            <h2>More events:</h2>
            <EventCardGrid eventDetails={data.allMarkdownRemark} />
          </div>
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
            <BannerImg>
              <li class="h2 bg--red">{frontmatter.eventDate}</li>
              <li class="h4 bg--red">
                {frontmatter.eventStart}-{frontmatter.eventEnd}
              </li>
              <li class="h3 ">at {frontmatter.eventLocation}</li>
            </BannerImg>
            <small>Posted: {frontmatter.date}</small>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <Button
              href="/events/"
              onClick={event => {
                event.preventDefault()
                navigate("/events/")
              }}
            >
              Back to all events
            </Button>
          </div>
          <div>
            <h2>More events:</h2>
            <EventCardGrid eventDetails={data.allMarkdownRemark} />
          </div>
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
