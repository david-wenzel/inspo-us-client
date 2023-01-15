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

// const postCard = post.map((board, index) => <PostCard id={id} key={ index } imgUrl={ imgUrl } body={body}  />)