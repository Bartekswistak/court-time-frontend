import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Logout from '../components/Logout'


const NavBar =  ({ currentUser}) => {


  return (
    <div className="NavBar">
       {Object.keys(currentUser).length !== 0 ? <Logout/> : ""}
       {Object.keys(currentUser).length !== 0 ? <h4> Welcome, {currentUser.first_name} </h4> : "" }
       {Object.keys(currentUser).length !== 0 ? <p> <Link exact='true' to={`/users/${currentUser.id}`}>Reservations</Link></p> :""  }
    </div>
  )
}


const mapStateToProps = (state) => {

  return {
    currentUser: state.currentUserReducer
  }
}

export default connect(mapStateToProps)(NavBar)
