import React from 'react'
import {connect} from 'react-redux'
import {CallbackComponent} from 'redux-oidc'
import userManager from '../utils/userManager'
import {withRouter} from 'react-router-dom'

class CallbackPage extends React.Component {
  handleSuccessCallback = user => {
    this.props.history.push("/")
  }

  handleErrorCallback = error => {
    console.log(error)
    this.props.history.push("/")
  }

  render() {
    return (
      <CallbackComponent
        userManager={userManager}
        successCallback={this.handleSuccessCallback}
        errorCallback={this.errorCallback}
      >
        <div>Loading...</div>
      </CallbackComponent>
    )
  }
}

export default withRouter(connect()(CallbackPage))
