import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <div className="container">
      <h1 className="brand">
        <Link to="/" >
          <span class="logo">{'{'}<span role="img" aria-label="Crossed Swords">⚔️</span>{'}'}</span><br/>
          KNIGHT OF<br/>
          <strong>CODING</strong>
        </Link>
      </h1>
      <nav className="site-navigation">
        <ul className="menu">
          <li><Link to="/blog">blog</Link></li>
          <li><Link to="/blog">self-guide</Link></li>
          <li><Link to="/blog">about</Link></li>
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
