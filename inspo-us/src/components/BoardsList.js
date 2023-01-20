import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BoardCard from './BoardCard';
import BoardPosts from './BoardPosts';
// import BoardDetails from './BoardDetails';




const BoardsList = () => {
  const [ user, setUser ] = useState(null);
  const [boards, setBoards]  = useState([])
  const [ loading, setLoading ] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const loadUser = async () => {
      const resp = await fetch(`http://localhost:9292/users/${id}`)
      const data = await resp.json();

      setUser(data);
      setBoards(data.boards)
      setLoading(false);
        }
    loadUser();
  }, [id])

  if(loading) {
    return <h1>Loading...</h1>
  } else {

    const deleteBoard = async id => {
        await fetch(`http://localhost:9292/boards/${ id }`, { method: "DELETE" })
        removeBoard( id );
      }
      
      const removeBoard = id => {
        setBoards(boards.filter( board => board.id !== id))
      }
    

    const boardCard = boards.map((board) => <BoardCard id={id} key={ board.id } board={ board } deleteBoard={deleteBoard}/>)
    // const boardPost = boards.map((board) => <BoardPosts posts={board.posts}  /> )
    // console.log(boards)
    return (
      <div>
        <h1>{ user.name }'s boards</h1>
        { boardCard }
        {/* { boardPost } */}
      </div>
    )
  }

}

export default BoardsList