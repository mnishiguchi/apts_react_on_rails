import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import Layout from '../layout/Layout'

import HomeContainer     from '../containers/HomeContainer'
import AboutContainer    from '../containers/AboutContainer'

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomeContainer} />
    <Route path="/about" component={AboutContainer} />

    <Redirect from="*" to="/" />
  </Route>
)

export default routes
