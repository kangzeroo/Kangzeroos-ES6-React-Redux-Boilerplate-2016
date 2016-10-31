import { combineReducers } from 'redux';
import contentReducer from './contentReducer'

const rootReducer = combineReducers({
  content: contentReducer
})

export default rootReducer
