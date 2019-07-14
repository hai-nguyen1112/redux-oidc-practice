import React from 'react'
import LoginPage from './LoginPage'
import MainPage from './MainPage'
import {connect} from 'react-redux'

const HomePage = ({user}) => {
  return (
    <>
    {
      !user || user.expired
      ?
      <LoginPage />
      :
      <MainPage />
    }
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.oidc.user
  }
}

export default connect(mapStateToProps)(HomePage)
