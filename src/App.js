import React from 'react';
import Login from './components/Login'
import Logout from './components/Logout'
import { getCurrentUser } from './actions/currentUser'
import { fetchUsers } from './actions/fetchUsers'
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import UsersContainer from './containers/UsersContainer'
import ClubsContainer from './containers/ClubsContainer'
import Home from './components/Home'
import { Route, Redirect, NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchUsers()
  }


  render () {
    return (
      <div className="App">

      <br/>
      <Button variant="dark"><NavLink exact activeClassName="current" to="/home"> HOME  </NavLink></Button>
      <Button variant="dark"><NavLink exact activeClassName="current" to="/clubs"> CLUBS </NavLink></Button>
      <Button variant="dark"><NavLink exact activeClassName="current" to="/users"> PLAYERS </NavLink></Button>
      <Button variant="dark"><NavLink exact activeClassName="current" to="/signup"> Register </NavLink></Button>
      <Button variant="dark"><NavLink exact activeClassName="current" to="/login"> Login </NavLink></Button>
      <br/>
      <br/>
      <NavBar />
      <br/>
      <Route exact path = '/' render = {()=> <Redirect to='/home'/>}/>
      <Route exact path = '/home' component = {Home} />
      <Route exact path="/login" component = {Login} />
      <br/>
      <ClubsContainer/>
      <UsersContainer/>
      <br/>
      <Logout/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("MSTP-APP:", state.usersReducer)
  return ({
    loggedIn: !!state.currentUserReducer,
    users: state.usersReducer
  })
}



export default connect(mapStateToProps, { getCurrentUser, fetchUsers })(App);
