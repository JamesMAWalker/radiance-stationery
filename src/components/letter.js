import React from 'react'
import { Divider } from '../assets/Divider'
import { LogoFL } from '../assets/LogoFL'

import "./letter.scss"

export const Letter = ({ printRef, pageCount }) => {
  console.log('pageCount: ', pageCount);
  
  const numberOfPages = Array.from({length: pageCount + 1}, () => " ")
  console.log('pageCount: ', pageCount);
  console.log('printRef: ', printRef);

  return (
    <main ref={printRef}>
      {numberOfPages.map((page) => (
        <>
          <div className='letter-container'>
            <div className='border' />
            <div className='letter__header'>
              <LogoFL />
            </div>
            <div className='letter__content'>
              <input
                type='text'
                className='salutation'
                placeholder='Dear Ms. Smith,'
              />
              <textArea
                className='body'
                style={{ resize: 'none' }}
              >
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed sodales cursus
                pellentesque. Suspendisse lorem diam,
                gravida sed facilisis sed, consectetur a
                risus. Ut nibh enim, dapibus a rutrum quis,
                dignissim vel nisi. Curabitur dignissim in
                lacus ut venenatis. Praesent maximus, est a
                tempor rutrum, ipsum metus auctor velit, non
                tincidunt neque urna ac nunc. Pellentesque
                auctor lacinia imperdiet. Quisque porta,
                tortor ac sodales imperdiet, nibh dolor
                sagittis dolor, fermentum fermentum ligula
                lectus eget erat. Duis in feugiat felis.
                Cras dictum dictum dapibus.
                <br />
                <br />
                Praesent maximus est ut dui tincidunt porta.
                Praesent ultricies quam vitae arcu posuere
                consequat eu ut urna. Suspendisse
                sollicitudin eros id ultricies vestibulum.
                Vestibulum maximus fermentum molestie.
                Vivamus commodo tincidunt nisl vitae tempus.
                Fusce sagittis ac risus et malesuada.
                Praesent non sapien semper, ultrices nunc
                id, aliquet orci. Aenean fermentum a tellus
                ac imperdiet. Pellentesque ultrices eu nisi
                ut faucibus. Nulla venenatis leo nisi, ac
                tincidunt dui gravida quis. Maecenas
                aliquam, felis et interdum facilisis, lacus
                risus facilisis urna, nec condimentum elit
                neque in mauris. Maecenas venenatis
                consequat finibus. Duis id metus felis.
                Pellentesque sit amet justo urna. Nulla
                mollis, arcu sed luctus cursus, nisi eros
                viverra mi, ut tempor ligula ligula sed ex.
              </textArea>
              <div className='letter__end'>
                <input
                  className='closing'
                  placeholder='Sincerely,'
                />
                <div className='signature'>
                  Peyman Khazan
                </div>
                <div className='printed-signature'>
                  <h4>Peyman Khazan</h4>
                  <p>Studio Director</p>
                </div>
              </div>
            </div>
            <footer className='footer'>
              <div className='footer__content'>
                <div className='number'>
                  310 | 268 | 8222
                </div>
                <Divider />
                <div className='email'>
                  info@radiancephotographystudio.com
                </div>
                <Divider />
                <div className='address'>
                  1643 Westwood Blvd <br /> Los Angleles, CA
                  90025
                </div>
              </div>
              <div className='footer__bottom-bar' />
            </footer>
          </div>
        </>
      ))}
    </main>
  )
}
