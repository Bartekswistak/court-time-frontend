import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions/fetchUsers'
import Users from '../components/Users'
import User from '../components/User'
import Signup from '../components/Signup'
import { Route } from 'react-router-dom'
// import ReservationInput from '../components/ReservationInput'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

// getUser = (userId)=>{
//   return this.props.users[userId-1]
// }

  render() {
    return (
      <div>

      <Route exact path="/users" render={(routerProps) => <Users {...routerProps} users={this.props.users}/>}/>
      <br/>
      <Route exact path="/signup" component = {Signup} />
      <br/>
      <Route path="/users/:id" render={(rProps)=> <User {...rProps} users={this.props.users} clubs={this.props.clubs}/>}/>

      </div>
    )
  }
}


const mapStateToProps = state => {
  // console.log("MSTP:", state.usersReducer)
  return {
    users: state.usersReducer,
    clubs: state.clubsReducer
  }
}


export default connect(mapStateToProps, {fetchUsers})(UsersContainer)
