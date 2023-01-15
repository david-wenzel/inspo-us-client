import React from 'react'
import { NavLink } from 'react-router-dom';

const BoardCard = ({ id, board }) => {

  return (
    <li>
      <NavLink to={`/users/${id}/boards/${board.id}`}>{ board.title }</NavLink>
    </li>
  )
}

export default BoardCard
