import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { auth } from '../config/firebase'

const Home = (props) => {

  const [logout, setLogout] = useState(false)

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("Logout successfully")
        setLogout(true)
      })
      .catch((error) => {
        alert(error.message)
      })
  }
  return (
    <div>
      <button className='auth-button'><Link to="/login">Login</Link></button>
      <button className='auth-button'><Link to="/signup">Signup</Link></button>
      <button onClick={handleLogout} className='auth-button'>Logout</button>
      {logout ? <h2>Login Please</h2> : <h2> {props.name ? `welcome - ${props.name}` : "Login Please"}</h2>}
    </div>
  )
}

export default Home