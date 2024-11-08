import React from 'react'
import { Link } from 'react-router-dom'

function Next() {
  return (
    <div className='text-center mt-4'>
        <h5>Take another quiz - </h5> 
        <div className=' option'>
        <div className='btn btn-info '><Link className='link' to="/html"> HTML </Link></div>
          <div className='btn btn-info '><Link className='link' to='/css'>CSS</Link></div>
          <div className='btn btn-info '><Link className='link' to="/js">JAVASCRIPT</Link></div>
          <div className='btn btn-info '><Link className='link' to="/react">REACT JS</Link></div>
          <div className='btn btn-outline-info '><Link className='link' to="/">HOME</Link></div>
        </div>
      </div>
  )
}

export default Next