import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

import Button from "../components/button"

const EventCardList = styled.ul`
  display: grid;
  grid-gap: 0.75rem;
  grid-template-columns: 1fr;
  list-style: none;
  padding: 0;

  @media screen and (min-width: 48rem) {
    grid-template-columns: repeat(auto-fit, minmax(30vw, 1fr));
  }
`

const EventCardBody = styled.div`
  padding: 1.5rem;
`

const EventCardFooter = styled.div`
  background-color: hsl(6, 85%, 35%);
  padding: 0.75rem;
  display: flex;
  justify-content: space-between;
`

const EventCardDetails = styled.p`
  line-height: 1.25;
  letter-spacing: 0.05rem;
  font-family: Cambay;
  margin: 0.75rem 0 0;
`

const EventCard = styled.li`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  color: hsl(6, 5%, 90%);
  background-color: hsl(6, 83%, 45%);
`
const EventCardGrid = ({ eventDetails }) => (
  <EventCardList>
    {eventDetails.edges.map(({ node }) => (
      <EventCard>
        <EventCardBody>
          <h3>
            <Link to={node.fields.slug} className="anchor--light">
              {node.frontmatter.headline}
              <small>
                <br />
                {node.frontmatter.subHeadline}
              </small>
            </Link>
          </h3>
          <EventCardDetails>
            <strong>Date:</strong> {node.frontmatter.eventDate}
            <br />
            <strong>Time:</strong> {node.frontmatter.eventStart} -{" "}
            {node.frontmatter.eventEnd}
            <br />
            <strong>Location:</strong> {node.frontmatter.eventLocation}
            <br />
          </EventCardDetails>
          <p>{node.excerpt}</p>
        </EventCardBody>
        <EventCardFooter>
          <EventCardDetails>
            <strong>Posted:</strong> {node.frontmatter.date}
          </EventCardDetails>
        </EventCardFooter>
      </EventCard>
    ))}
  </EventCardList>
)

export default EventCardGrid
