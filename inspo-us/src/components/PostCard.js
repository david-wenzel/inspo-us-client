import React from 'react'

export default function PostCard({post}) {
    let date = post.created_at
    let shortenedDate = date.slice(0, 10);

  return (
    <div>
      <p>{shortenedDate}</p>
      <img src={post.img_url} alt="" ></img>
      <p>{post.body}</p>
    </div>
  )
}
