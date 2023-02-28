import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/sticker.png'
import HeaderSocial from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1>Aina Ralijaona</h1>
        <h5 className='text-light'>Fullstack developer</h5>
        <CTA/>
        <HeaderSocial/>

        <div className='me'>
          <img src={ME} alt='me'></img>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header