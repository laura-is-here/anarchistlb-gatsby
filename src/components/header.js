import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

const Title = styled.p`
  color: hsl(6, 5%, 90%);
  text-decoration: none;
  letter-spacing: 0.05rem;
`

const Nav = styled.nav`
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
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: var(--main-color);
  color: #ecf0f1;
  padding: 0.5rem;
  box-shadow: 0px 1px 5px hsla(6, 5%, 10%, 0.2),
    0px 5px 10px hsla(6, 5%, 10%, 0.2);
`

const Header = ({ siteTitle, navLinks }) => (
  <header>
    <Wrapper>
      <Link to="/">
        <Title>{siteTitle}</Title>
      </Link>
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
