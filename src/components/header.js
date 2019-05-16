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
