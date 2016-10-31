import { ADD_CONTENT } from './action_types'

export function addValueToContent(value){
  return function(dispatch){
    dispatch({
      type: ADD_CONTENT,
      payload: value
    })
  }
}
