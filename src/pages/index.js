import React from "react"
import { Link, graphql, navigate } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import EventCardGrid from "../components/eventcardgrid"
import Button from "../components/button"
import SEO from "../components/seo"
import anarchyBackdrop from "../assets/images/a-backdrop.png"
import zinesBackdrop from "../assets/images/zines.jpg"
import foodBackdrop from "../assets/images/jakub-kapusnak-vnNFWKY7Tj4-unsplash.jpg"

const Container = styled.div`
  margin: 3rem 4% 3rem;

  @media screen and (min-width: 64rem) {
    margin: 3rem 12% 3rem;
  }

  @media screen and (min-width: 85.375rem) {
    margin: 3rem 20% 3rem;
  }

  @media screen and (min-width: 120rem) {
    margin: 3rem 24% 3rem;
  }
`

const backgroundImg = props =>
  css`
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${props.imgPath});
  `

const BannerImg = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--main-bg);
  background-color: var(--dark-bg);
  ${backgroundImg}
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BannerImg imgPath={anarchyBackdrop}>
      <Container>
        <h1 className="">
          For the spread of anarchist ideas & action in the Long Beach area.
        </h1>
        <Button primary light href="#about">
          Get to know us
        </Button>
        <Button light href="#events">
          View upcoming events
        </Button>
      </Container>
    </BannerImg>
    <Container className="text--center    padding--lg" id="about">
      <h2>We stand against capitalism and the state</h2>
      <p>
        Capitalism and the state work in symbiosis to oppress and rob
        individuals of dignity and liberty. Whether it's confinement to a
        bullshit office job (or two) for the majority of our waking hours or
        confinement to a literal prison cell, the ruling class makes sure
        there's always a boot on our neck ready to clamp down against any
        resistance.
      </p>
    </Container>
    <BannerImg imgPath={foodBackdrop}>
      <Container>
        <h2>Food, not bombs!</h2>
        <p>
          <strong>
            Long Beach Anarchist Collective will be sharing hot meals and fresh
            groceries with our community every fourth Sunday.
          </strong>
        </p>
        <Button
          href="/food-not-bombs"
          light
          onClick={event => {
            event.preventDefault()
            navigate("/food-not-bombs/")
          }}
        >
          Learn more!
        </Button>
      </Container>
    </BannerImg>
    <Container className="text--center    padding--lg">
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
    </Container>
    <BannerImg imgPath={zinesBackdrop}>
      <Container>
        <h2>Discussion Groups</h2>
        <p>
          <strong>
            Long Beach Anarchist Collective coordinates discussions of zines,
            articles, videos, & more.
          </strong>
        </p>
        <Button
          light
          href="/discussion-group/"
          light
          onClick={event => {
            event.preventDefault()
            navigate("/discussion-group/")
          }}
        >
          Join the discussion!
        </Button>
      </Container>
    </BannerImg>
    <Container className="text--center    padding--lg">
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
    </Container>
    <div id="events" className="bg--black   padding--lg">
      <h2>Upcoming Events</h2>
      <EventCardGrid eventDetails={data.allMarkdownRemark} />
      <Button
        light
        href="/events/"
        light
        onClick={event => {
          event.preventDefault()
          navigate("/events/")
        }}
      >
        All Events
      </Button>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: "events" } } }
      limit: 4
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

export default IndexPage
