
//asynchronous action creators
export const addClub = (clubData, history) => {

  return (dispatch) => {
    fetch ('http://localhost:3000/api/v1/clubs', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(clubData)
    })
      .then(response => response.json())
      .then(club => {
        if(club.error) {
          alert(club.error)
      } else {
        dispatch({type: 'ADD_CLUB', payload: club})


      }
    })
  }
}



// history.push('/')
  // history.push(`/clubs/${club.id}`)
