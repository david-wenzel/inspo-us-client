import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const EditPost = () => {
  const [post, setPost] = useState();
  const [ loading, setLoading ] = useState(true);
  const { id } = useParams();
  const [state, setState] = useState({
    img_url: "",
    body: ""
  })
  const history = useHistory();


  useEffect(() => {
    const loadPost = async () => {
      const resp = await fetch(`http://localhost:9292/posts/${id}`)
      const data = await resp.json();
      setPost(data);
      setLoading(false);
    }
    loadPost();
  }, [id])


const handleChange = e => {
    setState({
        ...state,
        [e.target.name]: e.target.value
      })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    const options = {
      method: "PATCH",
      headers,
      body: JSON.stringify(state)
    }
    await fetch(`http://localhost:9292/posts/${id}`, options)
    
    history.goBack();
    

  }
  if(loading){ return <h1>Loading...</h1>};

  return (
    <div>
      <h1>Edit Post { post.id }</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="name">New Img Url:</label>
          <input type="text" name='img_url' id="img_url" value={ state.img_url } onChange={ handleChange }  />
          <br />
          <label htmlFor="name">New Post Body: </label>
          <input type="text" name='body' id="body" value={ state.body } onChange={ handleChange }  />
        </div>
        <br />
        <input type="submit" value="Edit Post" />
      </form>
    </div>
  )
}

export default EditPost