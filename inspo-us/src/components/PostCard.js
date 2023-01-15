import React from 'react'

export default function PostCard({post}) {
  return (
    <div>
      <img src={post.img_url} ></img>
      <p1>{post.body}</p1>
    </div>
  )
}
