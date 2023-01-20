import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <ul id='nav'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </div>
  )
}
