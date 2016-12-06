import React from 'react';
import { Route, IndexRoute } from 'react-router';

// The site layout
import Layout from '../layout/Layout';

// Obtain all the pages that will be handled by React router.
import HomeContainer     from '../containers/HomeContainer';
import SearchContainer   from '../containers/SearchContainer';
import ContactContainer  from '../containers/ContactContainer';
import AboutContainer    from '../containers/AboutContainer';
import CommentsContainer from '../containers/CommentsContainer';

// Redirecting logic
import TestReactRouterRedirect from '../components/TestReactRouterRedirect/TestReactRouterRedirect';


export default (
  <Route path="/react" component={Layout}>
    <IndexRoute
      component={HomeContainer}
    />
    <Route
      path="/react/search"
      component={SearchContainer}
    />
    <Route
      path="/react/contact"
      component={ContactContainer}
    />
    <Route
      path="/react/about"
      component={AboutContainer}
    />
    <Route
      path="/react/comments"
      component={CommentsContainer}
    />

    <Route
      path="/react/contact/redirect"
      component={TestReactRouterRedirect}
      onEnter={TestReactRouterRedirect.checkAuth}
    />
    <Route
      path="/react/about/redirect"
      component={TestReactRouterRedirect}
      onEnter={TestReactRouterRedirect.checkAuth}
    />
  </Route>
);
