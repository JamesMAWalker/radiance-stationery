import React from 'react'
import { NavLink } from 'react-router-dom'

import { LogoFL } from '../assets/LogoFL'

import './home.scss'

const imgLinks = {
  letter: `https://res.cloudinary.com/jameswalker-work/image/upload/f_auto/q_40/v1624186549/Radiance/LH__1_-_Copy_bxowu3.png`,
  invoice: `https://res.cloudinary.com/jameswalker-work/image/upload/f_auto/q_40/v1624186546/Radiance/INV__f_hhho7u.png`,
  contract: `https://res.cloudinary.com/jameswalker-work/image/upload/f_auto/q_40/v1624186545/Radiance/LoA__p1_-_Copy_nxh3e2.png`,
  receipt: `https://res.cloudinary.com/jameswalker-work/image/upload/f_auto/q_40/v1624532478/Radiance/Rec__1_h4jhtr.png`,
}

const templateInfo = [
  {
    name: 'Invoice',
    path: '/invoice',
    imgSrc:
      'https://res.cloudinary.com/jameswalker-work/image/upload/f_auto/q_40/v1624186546/Radiance/INV__f_hhho7u.png',
  },
  {
    name: 'Letter',
    path: '/letterhead',
    imgSrc:
      'https://res.cloudinary.com/jameswalker-work/image/upload/f_auto/q_40/v1624186549/Radiance/LH__1_-_Copy_bxowu3.png',
  },
  {
    name: 'Receipt',
    path: '/receipt',
    imgSrc:
      'https://res.cloudinary.com/jameswalker-work/image/upload/f_auto/q_40/v1624532478/Radiance/Rec__1_h4jhtr.png',
  },
  {
    name: 'Contract',
    path: '/contract',
    imgSrc:
      'https://res.cloudinary.com/jameswalker-work/image/upload/f_auto/q_40/v1624186545/Radiance/LoA__p1_-_Copy_nxh3e2.png',
  },
]

export const Home = () => {
  return (
    <div className='home-page'>
      <div className='logo'>
        <LogoFL />
      </div>
      <h1 className='header'>
        <span className='company-name'>
          Radiance Photography
        </span>{' '}
        <br /> Stationery <br /> Suite
      </h1>
      <h4 className='options-header'>Choose a Template</h4>
      <ul className='options-list'>
        {templateInfo.map((tmpl) => {
          // const dataDisabled = tmpl.name === "Contract" ? `` : null
          return (
            <NavLink to={tmpl.path} className='option' >
              <div className='image-wrapper'>
                <img
                  className='option-photo'
                  src={tmpl.imgSrc}
                  alt={`${tmpl.name} document photo`}
                />
              </div>
              <h4>{tmpl.name}</h4>
            </NavLink>
          )
        })}
        {/* <NavLink to='invoice' className='option'>
          <div className="image-wrapper">
            <img
            className="option-photo"
            src={imgLinks.invoice}
            alt='invoice document photo'
          />
          </div>
          <h4>Invoice</h4>
        </NavLink>
        <NavLink to='letterhead' className='option'>
          <div className="image-wrapper">
            <img
            className="option-photo"
            src={imgLinks.letter}
            alt='letterhead document photo'
          />
          </div>
          <h4>Letter</h4>
        </NavLink>
        <NavLink to="/contract" onClick={(e) => e.preventDefault()} className='option' data-disabled>
          <div className="image-wrapper">
            <img
            className="option-photo"
            src={imgLinks.contract}
            alt='contract document photo'
          />
          </div>
          <h4>Contract</h4>
        </NavLink> */}
      </ul>
    </div>
  )
}
