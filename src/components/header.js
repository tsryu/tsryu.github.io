import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Profile from "../images/profile.png"

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <div className="container">
      <h1 className="brand">
        <Link to="/" >
          <img src={Profile} className="brand-image" alt=""/>
          <strong className="brand-title">tsryu<span className="comma">,</span></strong>
          <small className="brand-subtitle">류태석<span className="divider">|</span>프론트엔드 개발자</small>
        </Link>
      </h1>
      {/* <nav className="site-navigation">
        <ul className="menu">
          <li><Link to="/blog">blog</Link></li>
          <li><Link to="/self-guide">self-guide</Link></li>
          <li><Link to="/about">about</Link></li>
        </ul>
      </nav> */}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Knight of Coding`,
}

export default Header
