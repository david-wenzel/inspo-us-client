import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div id='home'>
      <h1 id='logo'>INSPO.us</h1>
      <NavLink to={`/users`}>Enter</NavLink>
    </div>
  )
}
