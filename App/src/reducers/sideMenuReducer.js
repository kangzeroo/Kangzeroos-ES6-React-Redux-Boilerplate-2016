import { TOGGLE_SIDEMENU } from '../actions/action_types'

const INITIAL_STATE = {
	visible: false
}

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case TOGGLE_SIDEMENU:
			return {
				...state,
				visible: !state.visible
			}
	}
	return state
}
