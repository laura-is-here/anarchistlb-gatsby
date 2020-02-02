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
  </footer>
)

export default Footer
