



const NewPost = ( { handleChange, handleSubmit, state }) => {


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