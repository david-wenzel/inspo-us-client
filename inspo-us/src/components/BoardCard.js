import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const BoardCard = ({ id, board, deleteBoard }) => {
// console.log(board)
const [showPosts, setShowPosts] = useState(false);

const onClick = () => setShowPosts(!showPosts);



let posts = board.posts
let postImgs = posts.map(({img_url}) => img_url)
  return (
    <li>
      <NavLink to={`/users/${id}/boards/${board.id}`}>{ board.title }</NavLink> <button onClick={ () => deleteBoard(board.id) }>Delete</button>
      {console.log(postImgs)}
      <br/>
      {/* {postImgs.map((url, index) => (
          <img key={index} src={url} style={{ maxWidth: "200px", maxHeight: "200px"}} alt="image" />
        ))} */}
{ !showPosts ? <button onClick={onClick}>{`show ${board.title} posts`}</button> : null }
      {showPosts ? postImgs.map((url, index) => (
        <img key={index} src={url} style={{ maxWidth: "200px", maxHeight: "200px"}} alt="image" />
      )) : null}
    </li>
  )
}

export default BoardCard

// const postCard = post.map((board, index) => <PostCard id={id} key={ index } imgUrl={ imgUrl } body={body}  />)