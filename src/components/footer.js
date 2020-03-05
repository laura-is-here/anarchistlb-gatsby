import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

const Nav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`

const NavLink = styled.li`
  > a {
    display: block;
    color: hsl(6, 5%, 90%);
    background-color: hsl(6, 83%, 43%);
    text-decoration: none;
    font-weight: bold;
    padding: 0.5rem;
    margin: 0.25rem;
    transition: 0.5s ease-in-out;

    &:hover,
    &:focus {
      color: var(--main-color);
      background-color: hsl(6, 5%, 90%);
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: var(--dark-bg);
  color: #ecf0f1;
  padding: 0.5rem;
  text-align: center;
  > * {
    margin: 0 auto;
  }
`

const Quote = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--dark-bg);
  color: #ecf0f1;
  padding: 1.5rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`

const Footer = ({ navLinks, socialLinks }) => (
  <footer>
    <Wrapper>
      <div>
        <h2>Find us elsewhere on the web</h2>
        <Nav>
          {socialLinks.map(link => (
            <NavLink key={link.name}>
              <a href={link.url}>{link.name}</a>
            </NavLink>
          ))}
        </Nav>
      </div>
      <nav>
        <h2>Navigation</h2>
        <Nav right>
          {navLinks.map(link => (
            <NavLink key={link.name}>
              <Link to={link.url}>{link.name}</Link>
            </NavLink>
          ))}
        </Nav>
      </nav>
    </Wrapper>
    <Quote>
      <div class="container">
        <a
          href="http://www.indigenousaction.org/voting-is-not-harm-reduction-an-indigenous-perspective/"
          class="anchor--light"
        >
          "If voting is the democratic participation in our own oppression,
          voting as harm reduction is a politics that keeps us at the mercy of
          our oppressors."
        </a>
      </div>
    </Quote>
  </footer>
)

export default Footer
