import React from 'react'
import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div className='Home-One'>
      <h1 style={{ textAlign: "center" }}>Hello! & Welcome</h1>
      <button><Link to="/books/book" style={{ textDecoration: "none", color: "white" }}>Proceed To Books Page </Link></button>
    </div>
  )
}

export default HomePage