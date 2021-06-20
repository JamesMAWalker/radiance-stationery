import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import { NavLink } from 'react-router-dom'

import { Letter } from './letter'

import './editor.scss'

export const DocumentEditor = ({
  children,
  pageCount,
  setPageCount,
  docType,
  rowCount,
  setRowCount,
  rowCollapsed,
  setRowCollapsed,
}) => {
  const toPrintRef = useRef(null)
  const handlePrint = useReactToPrint({
    content: () => toPrintRef.current,
  })
  const [maxRows, setMaxRows] = useState(rowCount)

  useEffect(() => {
    if (rowCollapsed) {
      setMaxRows(7)
    } else {
      setMaxRows(5)
    }
  }, [rowCollapsed, rowCount])

  const addRemovePages = (operator) => {
    if (operator === -1 && pageCount <= 0) return

    const newPageCount = pageCount + operator
    setPageCount(newPageCount)
  }

  const toggleRowCollapse = () => {
    if (maxRows <= rowCount && !rowCollapsed) {
      return
    } else {
      setRowCollapsed(!rowCollapsed)
    }
  }

  const maxIndication = () => {
    if (maxRows - rowCount > 1) {
      return 'var(--normal)'
    } else if (maxRows - rowCount === 1 || (maxRows === rowCount && !rowCollapsed)) {
      return 'var(--warning)'
    } else if (maxRows <= rowCount) {
      return 'var(--alert)'
    }
  }
   

  const addRemoveRows = (crement) => {
    console.log('crement: ', crement);
    let curNumRows = rowCount
    console.log('maxRows: ', maxRows);
    if (curNumRows <= 1 && crement === -1) {
      console.log('rowCollapsed: ', rowCollapsed);
      return
    }
    if (curNumRows >= maxRows && crement === 1) {
      setRowCollapsed(true)
      console.log('rowCollapsed: ', rowCollapsed);
      return
    }
    setRowCount(curNumRows + crement)
    console.log('rowCollapsed: ', rowCollapsed);
    console.log('rowCount: ', rowCount);
  }

  const childrenWithProps = React.cloneElement(children, {
    printRef: toPrintRef,
  })
  return (
    <div className='editor-container'>
      <div className='editor-bg'></div>
      <div className='document-scrollwrap'>
        <br />
        {childrenWithProps}
        <br />
      </div>
      <div className='editor-controls'>
        <h2 className='controls-header'>{docType} Controls</h2>
        {docType === 'Invoice' && (
          <>
            <button onClick={toggleRowCollapse} disabled={rowCount > maxRows || rowCount > 4} className='editor-btn'>
              {!rowCollapsed ? 'collapse' : 'expand'} rows
            </button>
            <div className='add-remove-wrap'>
              <button onClick={() => addRemoveRows(1)} className='editor-btn half' disabled={rowCount >= 7}>
                + row
              </button>
              <button onClick={() => addRemoveRows(-1)} className='editor-btn half' disabled={rowCount <= 1}>
                - row
              </button>
            </div>
            <div className='rows-info' style={{ color: maxIndication() }}>
              rows &nbsp; ▪ &nbsp; {rowCount} | {maxRows}
            </div>
          </>
        )}
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
        <button
          onClick={handlePrint}
          id='generate-pdf'
          className='editor-btn generate-btn main-btn, '
        >
          Generate {docType}
        </button>
        <NavLink to="/" className="back-link">
          back to documents home ▸
        </NavLink>
      </div>
    </div>
  )
}
