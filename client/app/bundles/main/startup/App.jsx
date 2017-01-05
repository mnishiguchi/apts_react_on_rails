import React        from 'react';
import ReactOnRails from 'react-on-rails';
import { Router, browserHistory } from 'react-router';

import routes from '../routes/routes';

const App = (_props, _railsContext) => {

  // Create an enhanced history that syncs navigation events with the store
  // const history = syncHistoryWithStore(
  //   browserHistory,
  //   store,
  // );

  return (
    <Router history={browserHistory}>
      {routes}
    </Router>
  );
};

export default App
