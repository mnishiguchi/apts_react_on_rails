import classNames           from 'classnames'
import React, { PropTypes } from 'react'
import { IndexLink, Link }  from 'react-router'

const NavigationBar = (props) => {
  return (
    <nav className="nav" role="navigation">
      <div className="nav-right">
        <div className="nav-item">
          <IndexLink to="/" activeClassName="active">
            Home
          </IndexLink>
        </div>
        <div className="nav-item">
          <Link to="/about" activeClassName="active">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
