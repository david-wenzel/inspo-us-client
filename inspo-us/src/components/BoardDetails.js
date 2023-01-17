import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostCard from './PostCard';


export default function BoardDetails() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id, boardId } = useParams();
    const [post, setPost] = useState();

    useEffect(() => {
        const loadPosts = async () => {
          const resp = await fetch(`http://localhost:9292/users/${id}/boards/${boardId}`)
          const data = await resp.json();
          
          setPosts(data);
          setLoading(false);
          setPost(data.posts)
        }
        loadPosts();
    }, [boardId, id])
    
  
      if(loading) {
        return <h1>Loading...</h1>
      } else {
        
        
    const sortedPosts = post.sort((a, b) => (a.created_at > b.created_at) ? -1 : 1);
  return (
    <div>
      <h1>{posts.title}</h1>
      { sortedPosts.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  )
}
} 