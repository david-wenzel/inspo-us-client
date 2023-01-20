const NewPost = ( { handleChange, handleSubmit, state }) => {


  return (
    <div>
      <p>Add Post</p>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="img url">Img Url </label>
          <input type="text" name='img_url' id="img_url" value={ state.img_url } onChange={ handleChange }  />
          <br />
          <label htmlFor="body">Post Body </label>
          <input type="text" name='body' id="body" value={ state.body } onChange={ handleChange }  />
        </div>
        <br />
        <input type="submit" value="Create Post" />
      </form>
    </div>
  )
}

export default NewPost