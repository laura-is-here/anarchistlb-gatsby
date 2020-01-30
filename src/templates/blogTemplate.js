import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  if (!frontmatter.eventDate) {
    return (
      <Layout>
        <SEO title={frontmatter.title} />
        <div className="flex-container    container-narrow">
          <div className="flex-item--lg">
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
        </div>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <SEO title={frontmatter.title} />
        <div className="flex-container    ">
          <div className="flex-item--lg   container-inner">
            <h1>
              {frontmatter.headline}
              <small>
                <br />
                {frontmatter.subHeadline}
              </small>
            </h1>
            <hr />
            <small>Posted: {frontmatter.date}</small>
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
            <hr />
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <small>
              <Link to="/events/">Back to all events</Link>
            </small>
          </div>
          <div className="flex-item--md">
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
          </div>
        </div>
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
