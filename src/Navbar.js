import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
        <h1>My Chirp</h1>
        <div className="links">
            <Link to="/" style={{
                color: "White",
                backgroundColor: "#f1356d",
                borderRadius: "8px"
            }}>Home</Link>
            <Link to="/create" style={{
                color: "White",
                backgroundColor: "#f1356d",
                borderRadius: "8px"
                // inline stylings
            }}>New Bird</Link>
        </div>
    </nav>
  )
}

export default Navbar