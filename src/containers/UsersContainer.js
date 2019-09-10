import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions/fetchUsers'
import Users from '../components/Users'
import User from '../components/User'
import Signup from '../components/Signup'
import NewSignupFormWrapper from '../components/NewSignupFormWrapper'
// import EditSignupFormWrapper from '../components/EditSignupFormWrapper'
import { Route, Switch } from 'react-router-dom'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchUsers()
  }


  render() {
    return (
      <div>
      <Switch>
      <Route exact path="/users" render={(routerProps) => <Users {...routerProps} users={this.props.users}/>}/>
      <br/>
      <Route exact path="/signup" component = {NewSignupFormWrapper} />
      <br/>

      <Route exact path="/users/:id" render={(rProps)=> <User {...rProps} users={this.props.users} clubs={this.props.clubs}/>}/>

    }/>
    </Switch>
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log("MSTP:", state.usersReducer)
  return {
    users: state.usersReducer,
    clubs: state.clubsReducer
  }
}


export default connect(mapStateToProps, {fetchUsers})(UsersContainer)


// <Route eact path= "/users/:id/edit" render={props=> {
//   const user = props.users.find(user => user.id === props.match.params.id)
//   return <EditSignupFormWrapper user={user} {...props} />*/}
// }
