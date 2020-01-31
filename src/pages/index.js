import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import anarchyBackdrop from "../assets/images/a-backdrop.png"

const EventCardGrid = styled.ul`
  display: grid;
  grid-gap: 0.75rem;
  grid-template-columns: 1fr;
  list-style: none;
  padding: 0;

  @media screen and (min-width: 48rem) {
    grid-template-columns: repeat(auto-fit, minmax(30vw, 1fr));
  }
`

const EventCardDetails = styled.p`
  line-height: 1.15;
  letter-spacing: 0.05rem;
  margin: 0;
  font-family: Cambay;

  &:first-child {
    margin: 1.5rem 0 0.25rem;
  }
`

const EventCard = styled.li`
  padding: 1.5rem;
  background-color: hsl(6, 83%, 45%);
`

const Button = styled.a`
  display: inline-block;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  color: ${props => (props.light ? "hsl(6,15%, 90%)" : "hsl(6, 15%, 10%)")};
  background-color: ${props =>
    props.primary ? "hsl(6, 83%, 45%)" : "transparent"};
  border: 4px solid
    ${props => (props.light ? "hsl(6, 15%, 90%)" : "hsl(6, 15%, 10%)")};
  padding: ${props => (props.large ? "0.75rem 1.5rem" : "0.25rem 0.75rem")};

  &:hover,
  &:active {
    background-color: ${props =>
      props.light ? "hsl(6,15%, 90%)" : "hsl(6, 15%, 10%)"};
    color: ${props => (props.light ? "hsl(6, 15%, 10%)" : "hsl(6,15%, 90%)")};
  }
`

const Container = styled.div`
  margin: 3rem 4% 0;

  @media screen and (min-width: 64rem) {
    margin: 3rem 8% 0;
  }

  @media screen and (min-width: 85.375rem) {
    margin: 3rem 16% 0;
  }

  @media screen and (min-width: 120rem) {
    margin: 3rem 20% 0;
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
  min-height: 70vh;
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
    <div id="events" className="bg--black   padding--lg">
      <h2>Upcoming Events</h2>
      <EventCardGrid>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <EventCard>
            <h3>
              <Link to={node.fields.slug} className="anchor--light">
                {node.frontmatter.headline}
                <small>
                  <br />
                  {node.frontmatter.subHeadline}
                </small>
              </Link>
            </h3>
            <EventCardDetails>Posted: {node.frontmatter.date}</EventCardDetails>
            <EventCardDetails>
              <br />
              {node.frontmatter.eventDate}
              <br />
              {node.frontmatter.eventStart} - {node.frontmatter.eventEnd}
              <br />
              {node.frontmatter.eventLocation}
            </EventCardDetails>
            <p>{node.excerpt}</p>
            <Button light>Read more</Button>
          </EventCard>
        ))}
      </EventCardGrid>
      <Link to="/events/" className="anchor--button-light">
        All Events
      </Link>
    </div>
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
    <BannerImg>
      <Container>
        <h2>Food, not bombs!</h2>
        <p>
          <strong>
            Long Beach Anarchist Collective will be sharing hot meals and fresh
            groceries with our community every fourth Sunday.
          </strong>
        </p>
        <Button light to="/food-not-bombs/">
          Learn more!
        </Button>
      </Container>
    </BannerImg>
    <Container class="text--center    padding--lg">
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
    <BannerImg>
      <Container>
        <h2>Discussion Groups</h2>
        <p>
          <strong>
            Long Beach Anarchist Collective coordinates discussions of zines,
            articles, videos, & more.
          </strong>
        </p>
        <Button light to="/discussion-group/">
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
