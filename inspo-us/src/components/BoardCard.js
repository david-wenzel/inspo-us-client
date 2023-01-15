import React from 'react'
import { NavLink } from 'react-router-dom';

const BoardCard = ({ board }) => {

  return (
    <li>
      <NavLink to={`/users/${board.id}/boards/${board.id}`}>{ board.title }</NavLink>
    </li>
  )
}

export default BoardCard
