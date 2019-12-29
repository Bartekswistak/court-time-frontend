const initialState = {
  clubName: "",
  location: ""
}

export default (state = initialState, action) => {

  switch (action.type) {

    case "UPDATE_CLUB_FORM":
      return action.clubFormData

    case "SET_CLUB_FORM_DATA_FOR_EDIT":
      return action.clubFormData

    case "RESET_CLUB_FORM":
        return initialState

    default:
        return state
    }
}
