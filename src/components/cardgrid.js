import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import { navigate } from "gatsby"

const CardList = styled.ul`
  display: grid;
  grid-gap: 0.75rem;
  grid-template-columns: 1fr;
  list-style: none;
  padding: 0;

  @media screen and (min-width: 48rem) {
    grid-template-columns: repeat(auto-fit, minmax(30vw, 1fr));
  }
`

const CardBody = styled.div`
  padding: 1.5rem;
`

const CardFooter = styled.div`
  background-color: hsl(6, 85%, 35%);
  padding: 0.75rem;
  display: flex;
  justify-content: space-between;
`

const CardDetails = styled.p`
  line-height: 1.25;
  letter-spacing: 0.05rem;
  font-family: Cambay;
  margin: 0.75rem 0 0;
`

const Card = styled.li`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  color: hsl(6, 5%, 90%);
  background-color: hsl(6, 83%, 45%);
  transition: 0.25s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: translateY(-0.75rem);
  }
`

const CardGrid = ({ postDetails }) => (
  <CardList>
    {postDetails.edges.map(({ node }) => (
      <Card
        onClick={event => {
          event.preventDefault()
          navigate(node.fields.slug)
        }}
      >
        <CardBody>
          <h3>
            <Link to={node.fields.slug} className="anchor--light">
              {node.frontmatter.headline}
              <small>
                <br />
                {node.frontmatter.subHeadline}
              </small>
            </Link>
          </h3>
          <CardDetails>
            <strong>{node.frontmatter.eventDate}</strong> from{" "}
            {node.frontmatter.eventStart} to {node.frontmatter.eventEnd}
            <br />
            at <strong>{node.frontmatter.eventLocation}</strong>
            <br />
          </CardDetails>
          <p>{node.excerpt}</p>
        </CardBody>
        <CardFooter>
          <CardDetails>
            <strong>Posted:</strong> {node.frontmatter.date}
          </CardDetails>
        </CardFooter>
      </Card>
    ))}
  </CardList>
)

export default CardGrid
