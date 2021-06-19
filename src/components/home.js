import React from 'react'
import { NavLink } from 'react-router-dom'

import './home.scss'

export const Home = () => {
  return (
    <div className='home-page'>
      <div className='logo'>Radiance Photography</div>
      <h1 className='header'>Stationery Suite</h1>
      <h4 className='options-header'>
        Choose a Template:
      </h4>
      <ul className='options-list'>
        <NavLink to="letterhead" className='option'>Letter</NavLink>
        <NavLink to="invoice" className='option'>Invoice</NavLink>
        <NavLink to="letterhead" className='option'>Contract</NavLink>
      </ul>
    </div>
  )
}
