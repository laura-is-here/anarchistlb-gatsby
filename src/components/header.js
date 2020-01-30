import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "../styles/header.module.scss"

const Header = ({ siteTitle, navLinks }) => (
  <header>
    <div className={headerStyles.header}>
      <Link className={headerStyles.siteTitle} to="/">
        {siteTitle}
      </Link>
      <nav>
        <ul className={headerStyles.nav}>
          {navLinks.map(link => (
            <li key={link.name}>
              <Link className={headerStyles.navLink} to={link.url}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
