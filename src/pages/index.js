import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout className="">
    <SEO title="Home" />
    <div className="banner-img banner-img--anarchy flex-column--center    text--center">
      <div className="container">
        <h1 className="">
          For the spread of anarchist ideas & action in the Long Beach area.
        </h1>
        <a class="anchor--button-light" href="#about">
          Get to know us
        </a>
        <a class="anchor--button-light" href="#events">
          View upcoming events
        </a>
      </div>
    </div>
    <div id="events" className="text--center    bg--black   padding--lg">
      <h2>Upcoming Events</h2>
      <ul className="grid-container ul-no-bullets">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li className="bg--red   padding--lg">
            <h3>
              {node.frontmatter.headline}
              <small>
                <br />
                {node.frontmatter.subHeadline}
              </small>
            </h3>
            <h4>
              <small>
                <br />
                {node.frontmatter.eventDate}
                <br />
                {node.frontmatter.eventStart} - {node.frontmatter.eventEnd}
                <br />
                {node.frontmatter.eventLocation}
              </small>
            </h4>
          </li>
        ))}
      </ul>
    </div>
    <div className="container    text--center    padding--lg" id="about">
      <h2>We stand against capitalism and the state</h2>
      <p>
        Capitalism and the state work in symbiosis to oppress and rob
        individuals of dignity and liberty. Whether it's confinement to a
        bullshit office job (or two) for the majority of our waking hours or
        confinement to a literal prison cell, the ruling class makes sure
        there's always a boot on our neck ready to clamp down against any
        resistance.
      </p>
    </div>
    <div className="banner-img banner-img--fnb flex-column--center text--center">
      <div class="container">
        <h2>Food, not bombs!</h2>
        <p>
          <strong>
            Long Beach Anarchist Collective will be sharing hot meals and fresh
            groceries with our community every fourth Sunday.
          </strong>
        </p>
        <Link className="anchor--button-light" to="/food-not-bombs/">
          Learn more!
        </Link>
      </div>
    </div>
    <div class="container    text--center    padding--lg">
      <h2 class="">We promote and engage in mutual aid with our community</h2>
      <p>
        As anarchists, we practice solidarity, not charity, by taking direct
        action to counter the violence of the capitalist system.
      </p>
      <p>
        Oppressed peoples have engaged in self-directed mutual aid for centuries
        and continue to do so to this day. We believe in solidarity and are
        against one-sided, hierarchical charity or "rescue" efforts that do
        nothing to aid the liberation of all peoples.
      </p>
    </div>
    <div className="banner-img banner-img--zines    flex-column--center text--center">
      <div className="container">
        <h2>Discussion Groups</h2>
        <p>
          <strong>
            Long Beach Anarchist Collective coordinates discussions of zines,
            articles, videos, & more.
          </strong>
        </p>
        <Link className="anchor--button-light" to="/discussion-group/">
          Join the discussion!
        </Link>
      </div>
    </div>
    <div className="container    text--center    padding--lg">
      <h2>We encourage the sharing of decentralized knowledge</h2>
      <p>
        Theory is important, and what better way to learn than by sharing
        knowledge, thoughts, and conversations with friends and "theorizing" by
        ourselves, for ourselves.
      </p>
      <p>
        The masses less need to be educated, and more need to be connected and
        encouraged to dream and struggle together.
      </p>
    </div>
  </Layout>
)

export const query = graphql`
  query {
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

export default IndexPage
