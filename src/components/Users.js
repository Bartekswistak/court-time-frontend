import React from 'react'
import {Link} from 'react-router-dom'

const Users = ({users}) => {
 console.log("users:", users)
return (

 <div>
 <h3> Player List </h3>
 {users.users.map(user => <li><Link to={`/users/$user.id`}>
   {user.first_name} {user.last_name}</Link></li>)}
   </div>
 )
}

export default Users


// {users.users.map(user => <p key={user.id}>
//   {user.first_name} {user.last_name},  Admin: {user.admin}</p>)}
