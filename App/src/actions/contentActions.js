// sideMenuActions.js holds all the "action creators" related to the side menu
// "action creators" are functions that use `dispatch()`, a function provided by Redux, to send actions to Redux reducers
// The Redux reducers (ie `../reducers/contentReducer.js`) will use actions to determine how they will calculate the next Redux state

// We import ADD_CONTENT from `./action_types` for use inside these action creators
import { ADD_CONTENT } from './action_types'

// This action creator will be exported for use in <Home> and other components
// When `addValueToContent()` is called, ADD_CONTENT action is dispatched to Redux reducers
// In addition, we have a `payload` attribute that is was passed in as `addValueToContent(value)`
// In this case, payload is additional content we want to display in <Home>
// Checkout `../reducers/contentReducer.js` to see how the reducer handles ADD_CONTENT
export function addValueToContent(value){
  return function(dispatch){
    dispatch({
      type: ADD_CONTENT,
      payload: value
    })
  }
}
