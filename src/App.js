import React from 'react'
import {Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import CallbackPage from './components/CallbackPage'

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/callback" component={CallbackPage}/>
      </div>
    )
  }
}

export default App
