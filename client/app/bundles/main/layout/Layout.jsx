import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';

import NavigationBar from '../components/NavigationBar/NavigationBar';

export default class Layout extends React.Component {

  render() {
    return (
      <div>

        <NavigationBar />

        <section className="container">
          {this.props.children}
        </section>
      </div>
    );
  }
}
