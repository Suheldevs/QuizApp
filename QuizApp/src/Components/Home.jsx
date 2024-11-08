import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <div className="d-flex justify-content-center align-items-center mt-4 flex-column" style={{minHeight: '80vh' }}>
        <h3>Take a quiz - </h3>
        <div className='option'>
          <div className='btn btn-info '><Link className='link' to="/html"> HTML </Link></div>
          <div className='btn btn-info '><Link className='link' to='/css'>CSS</Link></div>
          <div className='btn btn-info '><Link className='link' to="/js">JAVASCRIPT</Link></div>
          <div className='btn btn-info '><Link className='link' to="/react">REACT JS</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Home