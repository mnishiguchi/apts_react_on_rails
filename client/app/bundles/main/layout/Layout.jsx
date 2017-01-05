import React, { PropTypes } from 'react'
import { IndexLink, Link }  from 'react-router'

import NavigationBar from '../components/NavigationBar/NavigationBar'

export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <NavigationBar />

        <section style={{marginTop: '1rem'}}>
          {this.props.children}
        </section>
      </div>
    )
  }
}
