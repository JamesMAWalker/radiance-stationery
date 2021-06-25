import React from 'react'
import { LogoFL } from '../assets/LogoFL'

import './contract.scss'

export const ContractWrapper = ({ children }) => {
  return (
    <div className='contract-container secondary-page'>
      <div className='secondary-page__header-area'>
        <div className='secondary-page__logo-wrap'>
          <LogoFL />
        </div>
        <h1 className='secondary-page__header'>
          Letter of <br /> Agreement
        </h1>
      </div>
      {children}
      <footer className='footer-letter'>
        <div className='footer-letter__content'>
          <div className='number'>310 | 268 | 8222</div>
          {/* <Divider /> */}
          <div className='email'>
            info@radiancephotographystudio.com
          </div>
          {/* <Divider /> */}
          <div className='address'>
            1643 Westwood Blvd <br /> Los Angleles, CA 90025
          </div>
        </div>
        <div className='footer-letter__bottom-bar' />
      </footer>
    </div>
  )
}
