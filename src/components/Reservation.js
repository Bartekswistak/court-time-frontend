import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

const Reservation = (props) => {
// console.log("reservation:", props)

  // let reservation =  props.currentUser && props.currentUser.reservations[props.match.params.id-1]

  // this will allow you to find a reservation through a link where a reservation is deleted or the
  // sequence of reservation.ids is not in order since various currentUsers will book reservations.
  let reservation = props.currentUser && props.currentUser.reservations.filter(reservation => reservation.id == props.match.params.id)[0]


return (
  <div>

  Player: {props.currentUser ? props.currentUser.first_name : null} {props.currentUser ? props.currentUser.last_name : null}<br/>
  ConfirmID: {reservation ? reservation.confirmID : null} <br/>
  Date: {reservation ? moment(reservation.day).format('MMM DD YYYY') : null} <br/>
  Time: {reservation ?  reservation.hour : null}
  </div>
)

}

export default connect(null)(Reservation)
