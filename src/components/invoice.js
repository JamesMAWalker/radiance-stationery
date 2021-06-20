// import React, { useEffect, useState } from 'react'
// import { LogoFL } from '../assets/LogoFL';

// import './invoice.scss';

// export const Invoice = ({ printRef }) => {
//   const invDetail = {
//     name: 'Michelle Smith',
//     addressLOne: '1234 Placeholder wy.',
//     addressLTwo: 'Pleasanton, CA 12345',
//     number: '555 321 1234',
//   }
//   const paymentContent = 
//   `Cash, or check made payable to 
// “Radiance Photography Studio”.`

//   useEffect(() => {
//     const qtyVal = parseInt(
//       document
//         .querySelector('.qty')
//         .getAttribute('placeholder'),
//         10
//     )
//     console.log('qtyVal data type: ', typeof qtyVal);
    
//   }, [])

//   const rows = Array.from({ length: 2}, () => ' ')

//   return (
//     <main ref={printRef}>
//       <div className='invoice-container'>
//         <div className='invoice-top'>
//           <div className='invoice-top__header-area'>
//             <div className='invoice-top__logo-wrap'>
//               <LogoFL />
//             </div>
//             <h1 className='invoice-top__header'>Invoice</h1>
//           </div>
//           <div className='invoice-top__info-area'>
//             <div className='dates'>
//               <div className='dates__invoice'>
//                 <h4>INVOICE DATE</h4>
//                 <input placeholder='10.21.2020' />
//               </div>
//               <div className='dates__due'>
//                 <h4>DUE DATE</h4>
//                 <input placeholder='11.1.2020' />
//               </div>
//             </div>
//             <div className='invoice-detail'>
//               <div className='invoice-detail__invoicee'>
//                 <h4>INVOICE TO</h4>
//                 <input
//                   className='name'
//                   type='text'
//                   placeholder={invDetail.name}
//                 />
//                 <input
//                   className='address'
//                   type='text'
//                   placeholder={invDetail.addressLOne}
//                 />
//                 <input
//                   className='address'
//                   type='text'
//                   placeholder={invDetail.addressLTwo}
//                 />
//                 <input
//                   className='number'
//                   type='text'
//                   placeholder={invDetail.number}
//                 />
//               </div>
//               <div className='invoice-detail__invoice-number'>
//                 <h4>INVOICE No.</h4>
//                 <input
//                   className='number'
//                   type='text'
//                   placeholder='00023456'
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='invoice-body'>
        
        
//           <div className='invoice-body__grid'>
//             <div className='row header-row'>
//               <span style={{ textAlign: 'left' }}>Qty</span>
//               <span>Products & Services</span>
//               <span>Price</span>
//               <span>Discount</span>
//               <span style={{ textAlign: 'right' }}>
//                 Total
//               </span>
//             </div>
//             {rows.map((row) => {
              
//               return (
//                 <div className='row'>
//                   <input
//                     type='text'
//                     placeholder='1'
//                     // value={1}
//                     className='qty'
//                   />
//                   <input
//                     type='text'
//                     placeholder='Wedding Day Shoot'
//                     className='prod-serv'
//                   />
//                   <input
//                     type='text'
//                     placeholder='$1000'
//                     className='price'
//                   />
//                   <input
//                     type='text'
//                     placeholder={' '}
//                     className='discount'
//                   />
//                   <input
//                     type='text'
//                     placeholder='$1000'
//                     className='total'
//                   />
//                 </div>
//               )
//             })}
//             <div className='row subtotal-row'>
//               <span className='empty'> </span>
//               <span className='empty'> </span>
//               <span className='subtotal'>SUBTOTAL</span>
//               <span className='empty'> </span>
//               <span
//                 style={{ textAlign: 'right' }}
//                 className='subtotal-num'
//               >
//                 $5600
//               </span>
//             </div>
//             <div className='row deposit-row'>
//               <span className='empty'> </span>
//               <span className='empty'> </span>
//               <span className='subtotal'>DEPOSIT</span>
//               <span className='empty'> </span>
//               <span
//                 style={{ textAlign: 'right' }}
//                 className='subtotal-num'
//               >
//                 $1000
//               </span>
//             </div>
//             <div className='row grandtotal-row'>
//               <span className='empty'> </span>
//               <span className='empty'> </span>
//               <span className='grandtotal'>GRAND TOTAL</span>
//               <span className='empty'> </span>
//               <span
//                 style={{ textAlign: 'right' }}
//                 className='subtotal-num'
//               >
//                 $4600
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="invoice-close">
//           <h3 className="invoice-close__header">Payment Methods</h3>
//           <textarea className="invoice-close__content" placeholder={paymentContent} />
//         </div>
//       </div>
//     </main>
//   )
// }
