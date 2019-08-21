
export const deleteCourt = (courtId, clubId) => {

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/clubs/${clubId}/courts/${courtId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(club => dispatch({type: 'DELETE_COURT', payload: club}))
  }
}
