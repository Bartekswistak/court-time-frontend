import React from 'react'
import{connect} from 'react-redux'
import uuid from 'uuid'
import moment from 'moment'
import {addReservation} from '../actions/addReservation'
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';


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
    day: "",
    hour: "",
    rate: "",
    confirmId: uuid()
  }
}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event)=> {

    event.preventDefault()

    // need correct userId and courtId - not clubId
    let userId = this.props.match.params.id
    let courtId = this.props.match.params.id

    this.props.addReservation(this.state, userId, courtId)
    console.log("this.state.day:", this.state.day)
    console.log("userId:", userId)
    console.log("courtId:", courtId)
    this.setState({
      day: "",
      hour: "",
      rate: "",
      confirmId: uuid()
    })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Reserve </label>
        <br/>
        <select
          name = 'day'
          value = {this.state.day}
          onChange = {this.handleChange}>
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
          name = 'hour'
          value = {this.state.hour}
          onChange = {this.handleChange}>
            <option value = "9:00am">9:00 am </option>
            <option value = "10:00am">10:00 am </option>
            <option value = "11:00am">11:00 am </option>
            <option value = "12:00pm">12:00 pm</option>
            <option value = "1:00pm">1:00 pm </option>
            <option value = "2:00pm">2:00 pm </option>
          </select><br/>
  <Button variant="primary"><input type="submit" value="Reserve"/></Button>
      </form>


    )
  }
}

export default withRouter(connect(null, {addReservation})(ReservationInput))
