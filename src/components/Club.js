import React from 'react'
// import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import '../style.css'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom'

const Club = (props) => {
// console.log("props:", props )

let club = props.clubs.clubs[props.match.params.id-1]
// let club = props.clubs.clubs.filter(club => club.id === props.match.params.id)[0]
// console.log("club:", club)


return (
<div>
  <Button variant="light"><NavLink exact activeClassName="current" to={ club && `/clubs/${club.id}/courts`}> New Court</NavLink></Button>
  <Card style={{ width: '45rem' }} >
    <Card.Body>

      <Card.Title> {club ? club.club_name : null} </Card.Title>
        <Card.Text className="courts">
         <br/>
          {club && club.courts.map(court => <li key={court.id}>
            Court: {court.court_number} <br/> Surface: {court.surface} <br/> Prime: ${court.prime} <br/>   Non-Prime: ${court.non_prime} <br/><br/></li> )}
            <br/><br/>
        </Card.Text>
    </Card.Body>
  </Card>

  </div>
  )
}
export default Club;
