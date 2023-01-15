import React from 'react'
import { NavLink } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <li>
      <NavLink to={`/users/${user.id}`}>{ user.name }</NavLink>
    </li>
  )
}

export default UserCard