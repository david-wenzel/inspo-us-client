import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>INSPO.us</h1>
      <NavLink to={`/users`}>Enter</NavLink>
    </div>
  )
}
