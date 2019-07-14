import {createUserManager} from 'redux-oidc'

const userManagerConfig = {
  client_id: '314601004097-65t29n0ool4lsnlen0aamfukj13dr310.apps.googleusercontent.com',
  redirect_uri: 'http://localhost:3000/callback',
  response_type: 'token id_token',
  scope: 'openid profile https://www.googleapis.com/auth/youtube.readonly',
  authority: 'https://accounts.google.com',
  silent_redirect_uri: 'http://localhost:3000/silent_renew.html',
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true
}

const userManager = createUserManager(userManagerConfig)

export default userManager
