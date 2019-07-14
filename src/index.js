import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {Provider} from 'react-redux'
import {OidcProvider} from 'redux-oidc'
import store from './redux/store'
import userManager from './utils/userManager'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <OidcProvider store={store} userManager={userManager}>
        <App />
      </OidcProvider>
    </Provider>
  </Router>, document.getElementById('root'))
