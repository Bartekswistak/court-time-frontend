import React from 'react'
import{connect} from 'react-redux'
import moment from 'moment'
import {addReservation} from '../actions/addReservation'
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Options from '../components/Options'
import {time} from '../data'

class ReservationInput extends React.Component {


constructor() {
  super()

  this.currentDate = new Date()
  this.dayOne = moment(this.currentDate).add(1, 'days').format('MMM DD YYYY')
  this.dayTwo = moment(this.currentDate).add(2, 'days').format('MMM DD YYYY')
  this.dayThree = moment(this.currentDate).add(3, 'days').format('MMM DD YYYY')
  this.dayFour = moment(this.currentDate).add(4, 'days').format('MMM DD YYYY')
  this.dayFive = moment(this.currentDate).add(5, 'days').format('MMM DD YYYY')
  this.daySix = moment(this.currentDate).add(6, 'days').format('MMM DD YYYY')
  this.daySeven = moment(this.currentDate).add(7, 'days').format('MMM DD YYYY')


  this.state = {
    court_id: "",
    day: "",
    hour: "",
    rate: "",
    rate_type: "",
    confirmId: ""
  }
}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event)=> {
    event.preventDefault()

    let userId = this.props.currentUser && this.props.currentUser.id
    let courtId = this.props.court.id
    let randomId = Math.floor(Math.random() * 1000000)

    this.props.addReservation({...this.state, court_id: courtId, user_id: userId, confirmID: randomId }, userId)

    // can also pass in one argument to addReservation action creator
    // don't add , userId at end to this.props.addReservation
    // this.props.addReservation({...this.state, court_id: courtId, user_id: userId, confirmID: randomId})
    // then in addReservation action creator pass in only (reservation) and in url use
    // reservation.user_id


    this.setState({
      court_id: "",
      day: "",
      hour: "",
      rate: "",
      rate_type: "",
      confirmId: ""
    })
    this.props.history.push(`/users/${userId}`)
  }


  render() {

    // The following modifies dropdown to exclude hours by day previously reserved
    let court = this.props.court

    // reservation objects reserved by day of dropdown (the value = this.state.day)
    let day_court = court.court_res.filter(reservation => moment(reservation.day).format('MMM DD YYYY') === this.state.day)

    // an array of strings for hours booked by court by day
    let hour_court = day_court.map(reservation => reservation.hour)

    // new time object that excludes hours already reserved by day
    let new_time = time.filter(time => !hour_court.includes(time.value))


    return (

      <form onSubmit={this.handleSubmit}>
        <label> Select </label><br/>

        <select
          name = 'day'
          value = {this.state.day}
          onChange = {this.handleChange}>
          <option value = "select"> Day </option>
          <option value = {this.dayOne}> {this.dayOne} </option>
          <option value = {this.dayTwo}> {this.dayTwo} </option>
          <option value = {this.dayThree}> {this.dayThree} </option>
          <option value = {this.dayFour}> {this.dayFour} </option>
          <option value = {this.dayFive}> {this.dayFive} </option>
          <option value = {this.daySix}> {this.daySix} </option>
          <option value = {this.daySeven}> {this.daySeven} </option>
          </select>

          <br/>

          <select
          name = "hour"
          value = {this.state.hour}
          onChange = {this.handleChange}>
          <Options options = {new_time}/>
          </select>

        <br/><br/>
  <Button variant="primary"><input type="submit" value="Reserve"/></Button>

      </form>

    )
  }
}



export default withRouter(connect(null, {addReservation})(ReservationInput))
