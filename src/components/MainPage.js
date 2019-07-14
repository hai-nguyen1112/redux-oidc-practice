import React from 'react'
import {connect} from 'react-redux'
import userManager from '../utils/userManager'

class MainPage extends React.Component {
  render() {
    const {user} = this.props
    return (
      <div style={styles.root}>
        <div style={styles.title}>
          <h3>Welcome, {user ? user.profile.name : "Mister Unknown"}!</h3>
          <h3>You have successfully logged in this app using your Google Account</h3>
        <button
          onClick={event => {
            event.preventDefault();
            alert(JSON.stringify(user, null, 2));
          }}
        >
          Show user info
        </button>
        <button
          onClick={event => {
            event.preventDefault();
            userManager.removeUser(); // removes the user data from sessionStorage
          }}
        >
          Logout
        </button>
      </div>
      </div>
    )
  }
}

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    flexShrink: 1
  },
  title: {
    flex: "1 0 auto"
  },
  list: {
    listStyle: "none"
  },
  li: {
    display: "flex"
  }
}

const mapStateToProps = state => {
  return {
    user: state.oidc.user
  }
}

export default connect(mapStateToProps)(MainPage)
