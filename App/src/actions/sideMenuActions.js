import { TOGGLE_SIDEMENU } from './action_types'

export function toggleSideMenu(){
  return function(dispatch){
    dispatch({
      type: TOGGLE_SIDEMENU
    })
  }
}
