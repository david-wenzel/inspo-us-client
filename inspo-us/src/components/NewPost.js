// import React, { useState } from 'react'
import { useParams } from 'react-router-dom';



const NewPost = ( { handleChange, handleSubmit, state }) => {
//   const [ imgUrl, setImgUrl ] = useState("");
//   const [postBody, setPostBody] = useState();
// const { id, boardId } = useParams();


//   const [state, setState] = useState({
//     img_url: "",
//     body: ""
//   })

//   const handleChange = e => {
//     setState({
//         ...state,
//         [e.target.name]: e.target.value
//       })
//   }

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const headers = {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//     // const body = { img_url: imgUrl,
//     // body: postBody }
//     const options = {
//       method: "POST",
//       headers,
//       body: JSON.stringify(state)
//     }
//     await fetch(`http://localhost:9292/users/${id}/boards/${boardId}/posts`, options)

// }


  return (
    <div>
      <p>New user</p>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="name">New Post </label>
          <input type="text" name='img_url' id="img_url" value={ state.img_url } onChange={ handleChange }  />
          <br />
          <input type="text" name='body' id="body" value={ state.body } onChange={ handleChange }  />
        </div>
        <br />
        <input type="submit" value="Create Post" />
      </form>
    </div>
  )
}

export default NewPost