import uuid from "uuid";

export default (state = null, action) => {

  switch (action.type) {

    case "SET_CURRENT_USER":
    // console.log("action.user:", action.user)
      return action.user

    case "CLEAR_CURRENT_USER":
      return null

      case 'ADD_RESERVATION':

          return {...state, user: action.payload}


    default:
      return state
  }
}
