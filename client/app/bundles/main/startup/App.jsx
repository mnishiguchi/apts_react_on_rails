import React                      from 'react'
import { Provider }               from 'react-redux';
import ReactOnRails               from 'react-on-rails'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore }   from 'react-router-redux'

import routes from '../routes'

const App = (_props, _railsContext) => {

  const store = ReactOnRails.getStore('appStore')

  // Create an enhanced history that syncs navigation events with the store
  const history = syncHistoryWithStore(
    browserHistory,
    store,
  )

  return (
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
  )
}

export default App
