import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print';

import { Letter } from './letter';

import "./editor.scss"

export const DocumentEditor = ({ children, pageCount, setPageCount, docType }) => {
  
  const toPrintRef = useRef(null)
  const handlePrint = useReactToPrint({
    content: () => toPrintRef.current
  })

  const addRemovePages = (operator) => {
    if (operator === -1 && pageCount <= 0) return;
    
    const newPageCount = pageCount + operator
    setPageCount(newPageCount)
  }

  const childrenWithProps = React.cloneElement(children, { printRef: toPrintRef })
  return (
    <div className='editor-container'>
      {childrenWithProps}
      <button
        onClick={handlePrint}
        className='button__generate'
      >
        Generate PDF
      </button>
      {docType === 'Letter' && (
        <div className='page-count'>
          <p>current number of pages</p>
          <div className='page-count__actions'>
            <button onClick={() => addRemovePages(-1)}>
              -
            </button>
            <p>{pageCount + 1}</p>
            <button onClick={() => addRemovePages(1)}>
              +
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

