import {combineReducers} from 'redux'
import {reducer as oidcReducer} from 'redux-oidc'

const rootReducer = combineReducers({
  oidc: oidcReducer
})

export default rootReducer
