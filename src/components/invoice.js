import React from 'react'
import { LogoFL } from '../assets/LogoFL';

import './invoice.scss';

export const Invoice = ({ printRef, }) => {
  const invDetail = {
    name: 'Michelle Smith',
    addressLOne: '1234 Placeholder wy.',
    addressLTwo: 'Pleasanton, CA 12345',
    number: '555 321 1234',
  }

  return (
    <main ref={printRef}>
      <div className='invoice-container'>
        <div className='invoice-top'>
          <div className='invoice-top__header-area'>
            <div className='invoice-top__logo-wrap'>
              <LogoFL />
            </div>
            <h1 className='invoice-top__header'>Invoice</h1>
          </div>
          <div className='invoice-top__info-area'>
            <div className='dates'>
              <div className='dates__invoice'>
                <h4>INVOICE DATE</h4>
                <input placeholder="10.21.2020" />
              </div>
              <div className='dates__due'>
                <h4>DUE DATE</h4>
                <input placeholder="11.1.2020" />
              </div>
            </div>
            <div className="invoice-detail">
              <div className="invoice-detail__invoicee">
                <h4>INVOICE TO</h4>
                <input className="name" type="text" placeholder={invDetail.name} />
                <input className="address" type="text" placeholder={invDetail.addressLOne} />
                <input className="address" type="text" placeholder={invDetail.addressLTwo} />
                <input className="number" type="text" placeholder={invDetail.number} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
