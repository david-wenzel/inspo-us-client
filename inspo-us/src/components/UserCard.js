import React from 'react'
import { NavLink } from 'react-router-dom';

const UserCard = ({ user, deleteUser }) => {
  return (
    <li>
      <NavLink to={`/users/${user.id}`}>{ user.name }</NavLink> <button onClick={ () => deleteUser(user.id) }>Delete</button>
    </li>
  )
}

export default UserCard