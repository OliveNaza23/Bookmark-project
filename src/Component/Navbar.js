import React from 'react'
import bookmark from '../images/logo-bookmark.svg'


const Navbar = () => {
  return (
    <div className='container '>

      <header className='d-flex align-items-center justify-content-between'>
        <img src={bookmark} alt="" />
      <nav>
        <ul>
          <li className=''>FEATURES</li>
          <li>PRICING</li>
          <li>CONTACT</li>
          <li><button className=''>LOGIN</button></li>

        </ul>
      </nav>
      </header>



    </div>
  )
}

export default Navbar