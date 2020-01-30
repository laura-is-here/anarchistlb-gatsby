import { Link } from "gatsby"
import React from "react"
import footerStyles from "../styles/footer.module.scss"

const Footer = ({ navLinks, socialLinks }) => (
  <footer className={footerStyles.footer}>
    <div>
      <h2>Find us elsewhere on the web</h2>
      <ul className={footerStyles.nav}>
        {socialLinks.map(link => (
          <li key={link.name}>
            <a className={footerStyles.navLink} href={link.url}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <nav>
      <h2>Navigation</h2>
      <ul className={footerStyles.nav}>
        {navLinks.map(link => (
          <li key={link.name}>
            <Link className={footerStyles.navLink} to={link.url}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </footer>
)

export default Footer
