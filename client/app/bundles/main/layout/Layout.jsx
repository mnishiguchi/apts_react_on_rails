import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';

import BaseComponent from '../../../libs/components/BaseComponent';

import NavigationBar from '../components/NavigationBar/NavigationBar';

import './Layout.scss';

export default class Layout extends BaseComponent {

  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  /* eslint-disable react/no-unescaped-entities */
  // Page content will be rendered here as `this.props.children`.
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
