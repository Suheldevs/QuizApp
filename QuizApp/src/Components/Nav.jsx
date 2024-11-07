import React from 'react'
import { Navbar} from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
function Nav() {
  return (
    <div className="d-flex justify-content-around bg-dark text-light fs-3">
        <Navbar.Brand className=''>suhel.dev</Navbar.Brand>
        <a href="https://github.com/Suheldevs/QuizApp" target="_blank" className="text-white">
          <FaGithub size={24} />
        </a>
      </div>
  )
}

export default Nav