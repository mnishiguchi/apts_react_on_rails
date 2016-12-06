import classNames           from 'classnames';
import React, { PropTypes } from 'react';
import { IndexLink, Link }  from 'react-router';

const NavigationBar = (props) => {
  // const { commentsCount, pathname } = props;

  return (
    <nav className="navbar navbar-inverse" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#site-navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="/react">Ash</a>
        </div>
        <div className="collapse navbar-collapse" id="site-navigation">
          <ul className="nav navbar-nav">
            <li>
              <IndexLink to="/react" activeClassName="active">
                Home
              </IndexLink>
            </li>
            <li>
              <Link to="/react/search" activeClassName="active">
                Search
              </Link>
            </li>
            <li>
              <Link to="/react/about" activeClassName="active">
                About
              </Link>
            </li>
            <li>
              <Link to="/react/contact" activeClassName="active">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// NavigationBar.propTypes = {
//   commentsCount: PropTypes.number,
//   pathname: PropTypes.string.isRequired,
// };

export default NavigationBar;
