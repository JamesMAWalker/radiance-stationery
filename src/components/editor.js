import React, { useEffect, useRef } from 'react'
import { useReactToPrint } from 'react-to-print';

import { Letter } from './letter';

import "./editor.scss"

export const DocumentEditor = () => {
  const toPrintRef = useRef(null)
  const handlePrint = useReactToPrint({
    content: () => toPrintRef.current
  })

  useEffect(() => {
    console.log(toPrintRef);
  }, [toPrintRef])

  return (
    <div className="editor-container" >
      <Letter printRef={toPrintRef}/>
      <button  onClick={handlePrint} className="button__generate" >Generate PDF</button>
    </div>
  )
}

