import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostCard from './PostCard';
import NewPost from './NewPost';



export default function BoardDetails() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id, boardId } = useParams();
    const [post, setPost] = useState();
    const [state, setState] = useState({
        img_url: "",
        body: ""
      })
  

    const loadPosts = async () => {
        const resp = await fetch(`http://localhost:9292/users/${id}/boards/${boardId}`)
        const data = await resp.json();
        
        setPosts(data);
        setLoading(false);
        setPost(data.posts)
      }
    
    useEffect(() => {
        loadPosts();
    }, [])

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
          })
      }

      const handleSubmit =  async e => {
        e.preventDefault();
        const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        const options = {
          method: "POST",
          headers,
          body: JSON.stringify(state)
        }
        await fetch(`http://localhost:9292/users/${id}/boards/${boardId}/posts`, options)
        setState({
            ...state,
            [e.target.name]: ""
          })
          loadPosts()
    };
   
    const deletePost = async id => {
        await fetch(`http://localhost:9292/posts/${id}`, { method: "DELETE" })
        removePost( id );
      }
    
      const removePost = id => {
        setPost(post.filter( post => post.id !== id))
      }

  
      if(loading) {
        return <h1>Loading...</h1>
      } else {
        
        
    const sortedPosts = post.sort((a, b) => (a.created_at > b.created_at) ? -1 : 1);
  return (
    <div>
      <h1>{posts.title}</h1>
      < NewPost handleChange={handleChange} handleSubmit={handleSubmit} state={state}/>
      { sortedPosts.map(post => <PostCard key={post.id} post={post} deletePost={deletePost} />)}
    </div>
  )
}
} 