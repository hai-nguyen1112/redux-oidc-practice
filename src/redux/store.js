import {createStore} from 'redux'
import rootReducer from './reducer'
import userManager from '../utils/userManager'
import {loadUser} from 'redux-oidc'

const store = createStore(rootReducer)
loadUser(store, userManager)

export default store
