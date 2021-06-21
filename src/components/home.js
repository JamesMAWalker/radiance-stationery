import React from 'react'
import { NavLink } from 'react-router-dom'

import { LogoFL } from '../assets/LogoFL';

import './home.scss'

const imgLinks = {
  letter: `https://res.cloudinary.com/jameswalker-work/image/upload/f_auto/q_40/v1624186549/Radiance/LH__1_-_Copy_bxowu3.png`,
  invoice: `https://res.cloudinary.com/jameswalker-work/image/upload/f_auto/q_40/v1624186546/Radiance/INV__f_hhho7u.png`,
  contract: `https://res.cloudinary.com/jameswalker-work/image/upload/f_auto/q_40/v1624186545/Radiance/LoA__p1_-_Copy_nxh3e2.png`,
}

export const Home = () => {
  return (
    <div className='home-page'>
      <div className='logo'><LogoFL/></div>
      <h1 className='header'>Stationery <br /> Suite</h1>
      <h4 className='options-header'>Choose a Template</h4>
      <ul className='options-list'>
        <NavLink to='invoice' className='option'>
          <img
            className="option-photo"
            src={imgLinks.invoice}
            alt='invoice document photo'
          />
          <h4>Invoice</h4>
        </NavLink>
        <NavLink to='letterhead' className='option'>
          <img
            className="option-photo"
            src={imgLinks.letter}
            alt='letterhead document photo'
          />
          <h4>Letter</h4>
        </NavLink>
        <NavLink to="/contract" onClick={(e) => e.preventDefault()} className='option' data-disabled>
          <img
            className="option-photo"
            src={imgLinks.contract}
            alt='contract document photo'
          />
          <h4>Contract</h4>
        </NavLink>
      </ul>
    </div>
  )
}
