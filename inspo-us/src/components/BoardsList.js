import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BoardCard from './BoardCard';




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

    const boardCard = boards.map((board, index) => <BoardCard key={ index } board={ board } />)
    // console.log(boards)
    return (
      <div>
        <h1>{ user.name }'s boards</h1>
        { boardCard }
      </div>
    )
  }

}

export default BoardsList