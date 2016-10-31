import { combineReducers } from 'redux';
import contentReducer from './contentReducer'
import sideMenuReducer from './sideMenuReducer'

const rootReducer = combineReducers({
  content: contentReducer,
  sideMenu: sideMenuReducer
})

export default rootReducer
