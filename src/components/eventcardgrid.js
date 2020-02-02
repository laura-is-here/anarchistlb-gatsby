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
  color: hsl(6, 5%, 90%);
  background-color: hsl(6, 83%, 45%);
`
const EventCardGrid = ({ eventDetails }) => (
  <EventCardList>
    {eventDetails.edges.map(({ node }) => (
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
        <Link to={node.fields.slug}>
          <Button light>Read more</Button>
        </Link>
      </EventCard>
    ))}
  </EventCardList>
)

export default EventCardGrid
//
// export default () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         allMarkdownRemark {
//           edges {
//             node {
//               id
//               frontmatter {
//                 title
//                 tags
//                 subHeadline
//                 path
//                 img_alt
//                 img
//                 eventStart
//                 eventLocation
//                 headline
//                 eventEnd
//                 eventDate
//                 date
//                 author
//               }
//               fields {
//                 slug
//               }
//               excerpt
//             }
//           }
//         }
//       }
//     `}
//     render={data => <EventCardGrid />}
//   />
// )
