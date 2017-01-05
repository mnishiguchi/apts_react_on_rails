import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import Layout       from '../layout/Layout'
import HomeView     from '../containers/HomeView'
import AboutView    from '../containers/AboutView'
import ListingView  from '../containers/ListingView';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomeView} />
    <Route path="/about" component={AboutView} />

    <Route path="/listing" component={ListingView} />

    <Redirect from="*" to="/" />
  </Route>
)

export default routes
