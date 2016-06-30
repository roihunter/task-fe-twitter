import { SELECT_USER_ACTION } from '../actions/index'

export default function selectedUserReducerDefinition (state = null, action) {
  switch (action.type) {
    case SELECT_USER_ACTION:
      return action.payload
    default:
      break
  }

  return state
}
