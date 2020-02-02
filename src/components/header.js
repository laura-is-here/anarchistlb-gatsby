import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

const Title = styled.p`
  text-decoration: none;
  letter-spacing: 0.025rem;
  font-weight: 900;
  border-bottom: 6px solid hsl(6, 83%, 45%);
  > a {
    text-decoration: none;
    color: hsl(6, 15%, 90%);
  }
`

const Nav = styled.nav`
  margin-left: auto;
  > ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
  }
`

const NavLink = styled.li`
  margin: 0 0.25rem 0.5rem 0;
  > a {
    font-family: Cambay;
    color: hsl(6, 5%, 90%);
    text-decoration: none;
    font-weight: bold;
    padding: 0 0.5rem 0.5rem 0;

    &:hover,
    &:focus {
      background-color: hsl(6, 83%, 45%);
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  background-color: hsl(6, 5%, 5%);
  padding: 0.5rem;
`

const Header = ({ siteTitle, navLinks }) => (
  <header>
    <Wrapper>
      <Title>
        <Link to="/">{siteTitle}</Link>
      </Title>
      <Nav>
        <ul>
          {navLinks.map(link => (
            <NavLink key={link.name}>
              <Link to={link.url}>{link.name}</Link>
            </NavLink>
          ))}
        </ul>
      </Nav>
    </Wrapper>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
