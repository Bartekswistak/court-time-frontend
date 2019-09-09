import React from 'react'
import {connect} from 'react-redux'
import {fetchClubs} from '../actions/fetchClubs'
import ClubInput from '../components/ClubInput'
import Club from '../components/Club'
import { Route, Switch } from 'react-router-dom'

class ClubsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchClubs()
  }

  render() {
    return (
      <div>
      <Switch>
        <Route path="/clubs/:id" render={(routerProps)=> <Club {...routerProps} clubs={this.props.clubs} currentUser={this.props.currentUser}/>}/>
        <Route exact path = '/clubs' render ={() => <ClubInput clubInput = {this.props.club}/>} />
      </Switch>

      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log("state:", state.clubsReducer)
  return {
    clubs: state.clubsReducer,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {fetchClubs})(ClubsContainer)
