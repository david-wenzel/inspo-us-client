import React, {useEffect, useState} from 'react'
import UserCard from './UserCard'
import NewUser from './NewUser';

export default function UserList() {

    const [ users, setUsers ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [showForm, setShowForm] = useState(false);

    const onClick = () => setShowForm(!showForm);
    
    useEffect(() => {
        const loadUsers = async () => {
          const resp = await fetch(`http://localhost:9292/users`)
          const data = await resp.json();
          setUsers(data);
          setLoading(false);
        }
        loadUsers();
      }, [])

      

      if(loading){ return <h1>Loading...</h1>}
      
      const deleteUser = async id => {
        await fetch(`http://localhost:9292/users/${ id }`, { method: "DELETE" })
        removeUser( id );
      }
      
      const removeUser = id => {
        setUsers(users.filter( user => user.id !== id))
      }
    
  
    const userCard = users.map((user) => <UserCard key={ user.id } user={ user } deleteUser={deleteUser}/>)
    return (
    <div>
      <h1>Contributers</h1>
     { !showForm ? <button onClick={onClick}>Add Contributer</button> : null }
      {showForm ? <NewUser /> : null}
      {/* <NewUser /> */}
      {userCard}
    </div>
  )
}
