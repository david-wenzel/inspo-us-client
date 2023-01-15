import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostCard from './PostCard';


export default function BoardDetails() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id, board_id } = useParams();
    const [post, setPost] = useState();

    useEffect(() => {
        const loadPosts = async () => {
          const resp = await fetch(`http://localhost:9292/users/${id}/boards/${board_id}`)
          const data = await resp.json();
          
          setPosts(data);
          setLoading(false);
          setPost(data.posts)
        }
        loadPosts();
    }, [board_id])
    
    console.log(post)
      if(loading) {
        return <h1>Loading...</h1>
      } else {
        
  return (
    <div>
      <h1>{posts.title}</h1>
      { post.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  )
}
} 