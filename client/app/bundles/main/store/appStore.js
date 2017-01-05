import { createStore, applyMiddleware } from 'redux'
import thunk                            from 'redux-thunk'
import createLogger                     from 'redux-logger'

import reducers from '../reducers'

const logger = createLogger({ level: 'info', collapsed: true })

const appStore = (props, railsContext) => {

  const initialState = {
    railsContext,
  }

  return createStore(
    reducers,
    initialState,
    applyMiddleware(
      thunk,
      logger
    )
  )
}

export default appStore
