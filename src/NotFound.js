import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='not-found'>
        <h2>Sorry</h2>
        <p>The Page You selected cannot be found</p>
        <Link to='/'> Go Back to Homepage
        </Link>
    </div>
  )
}

export default NotFound