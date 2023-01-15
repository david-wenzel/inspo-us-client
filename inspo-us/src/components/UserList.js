import React, {useEffect, useState} from 'react'
import UserCard from './UserCard'

export default function UserList() {

    const [ users, setUsers ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    
    useEffect(() => {
        const loadUsers = async () => {
          const resp = await fetch(`localhost:9292/users`)
          const data = await resp.json();
          setUsers(data);
          setLoading(false);
        }
        loadUsers();
      }, [])

      if(loading){ return <h1>Loading...</h1>}
  
  
    const userCard = users.map((user, index) => <UserCard key={ index } user={ user }/>)
    return (
    <div>
      <h1>Contributers</h1>
      {userCard}
    </div>
  )
}
