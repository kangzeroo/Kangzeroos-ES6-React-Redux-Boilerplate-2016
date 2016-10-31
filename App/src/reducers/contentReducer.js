import { ADD_CONTENT } from '../actions/action_types'

const INITIAL_STATE = {
	myContent: []
}

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case ADD_CONTENT:
			return {
				...state,
				myContent: state.myContent.concat([action.payload])
			}
	}
	return state
}
