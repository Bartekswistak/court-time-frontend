const initialState = { clubs: []}

export default function clubsReducer(state = initialState, action) {
  switch (action.type) {

    case 'ADD_CLUB':
      return {...state, clubs: [...state.clubs,
      action.payload]}

    case 'DISPLAY_CLUBS':
     return {clubs: action.clubs}

     case 'DELETE_CLUB':
     return {...state, clubs: state.clubs.filter(club=> club.id !== action.payload.id)}


    case 'ADD_COURT':
    case 'DELETE_COURT':
      let clubs = state.clubs.map(club => {
        if (club.id === action.payload.id) {
          return action.payload
        } else {
          return club
        }
      })
        return {...state, clubs: clubs}

    case 'ADD_RESERVATION_TO_COURT':

        let clubs1 = state.clubs.map(club => {
          club.courts.map(court => {
            court.court_res.map(res => {
              if(res.id === action.payload.id){
              return action.payload
            } else {
              return club
            }
            })
          })
        })

      return {...state, court_res: action.payload}


    default:
      return state
  }
}
