// We import ADD_CONTENT for use inside this reducer
import { ADD_CONTENT } from '../actions/action_types'

// We can define the initial state of this Redux reducer
const INITIAL_STATE = {
	// myContent will be an array of strings
	// myContent will be used by <Home> (ie ../components/home.js) for displaying content
	myContent: []
}

// The Redux reducer is simply a function that takes 2 attributes: (state, action)
export default function(state = INITIAL_STATE, action){
	// This switch statement checks the incoming action for the `type` attribute
	switch(action.type){
		// If `action.type == ADD_CONTENT`, then..
		case ADD_CONTENT:
			return {
				// return all the attributes of state (using ES6 object deconstructors `...state`)
				...state,
				// and overwrite the `myContent` attribute with the old `myContent` array concatenated with the new action.payload value
				myContent: state.myContent.concat([action.payload])
			}
	}
	// for all uncaught `action.type`, just return the state
	return state
}

// This Redux reducer is exported for use in `./index.js`, to be combined with other reducers to form a giant combined reducer
// See `./index.js` for more details
