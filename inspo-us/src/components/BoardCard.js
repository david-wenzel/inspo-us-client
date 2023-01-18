import React from 'react'
import { NavLink } from 'react-router-dom';

const BoardCard = ({ id, board, deleteBoard }) => {

  return (
    <li>
      <NavLink to={`/users/${id}/boards/${board.id}`}>{ board.title }</NavLink> <button onClick={ () => deleteBoard(board.id) }>Delete</button>
    </li>
  )
}

export default BoardCard

// const postCard = post.map((board, index) => <PostCard id={id} key={ index } imgUrl={ imgUrl } body={body}  />)