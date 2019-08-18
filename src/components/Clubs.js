import React from 'react'
import {Link} from 'react-router-dom'


const Clubs = ({clubs}) => {
// console.log("clubs", clubs)

return (

  <div>

  {clubs && clubs.map(club =>
    <p className ='text-center' key={club.id}>

    <Link to={`/clubs/${club.id}`}> {club.club_name} - {club.location} -{club.courts.length} Courts </Link><br/>
    </p>)}
  </div>
  )
}

export default Clubs
