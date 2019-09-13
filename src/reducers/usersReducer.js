
const initialState = { users: []}

export default function usersReducer(state = initialState, action) {

  switch (action.type) {

    case 'DISPLAY_USERS':
     return  {users: action.users}

     case "ADD_USER":
       return {...state, users: [...state.users, action.user]}

      case 'ADD_RESERVATION':
      case 'DELETE_RESERVATION':
        let users = state.users.map(user => {
          if (user.id === action.payload.id) {
            return action.payload
          } else {
            return user
          }
        })
          return {...state, users: users}

// work in progress
      case 'EDIT_USER':
        return {users: state.users.map(user => user.id === action.user.id ? action.user : user && user)}

    default:
      return state
  }
}

// can also use the following for "ADD_USER"
// {users: state.users.concat(action.user)}
