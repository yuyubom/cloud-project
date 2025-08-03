import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        Welcome to Book Collection App!
        <br />
        <br />
        <Link to={'/login'}>SignIn</Link>
        <br />
        <Link to={'/books'}>Book Section</Link>
    </div>
  )
}

export default Home