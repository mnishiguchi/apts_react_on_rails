import ReactOnRails from 'react-on-rails'

import App from './App'

import appStore from '../store/appStore'

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  App
})

ReactOnRails.registerStore({
  appStore,
})
