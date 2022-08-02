import React from 'react'
import logo from '../images/logo-bookmark.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'

const Footer = () => {
  return (
    <div>
        <div className='container-fluid text-white '>
      <div className='firstfooter text-center p-3 '>
        <div>
          <p>35,000+ Already JOINED</p>
          <h3>Stay up-to-date with what we are doing</h3>
        </div>
        <div>
          <input type='text' placeholder='Enter a message' />
          <button className='btn bn-primary footerbtn'>Send</button>
        </div>
      </div>
      <div className='container-fluid'> </div>

      <div className=' lastfooter m-auto'>
        <div> <img src={logo} alt='' className='footerimg' /></div>
        <div className=' footerUl '>
          <ul>
            <li><a href=''>Features</a></li>
            <li><a href=''>Pricing</a></li>
            <li><a href=''>Contact</a></li>
          </ul>
        </div>
        <div className=' footerAncho '>
          <a href='https://www.facebook.com'><img src={facebook} alt='' /></a>

          <a href='https://www.twitter.com'><img src={twitter} alt='' /></a>
        </div>
        <hr />
      </div>
    </div>
    </div>
  )
}

export default Footer