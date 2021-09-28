import './App.scss'
import React, { useEffect, useState } from 'react'
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom'

import { DocumentEditor } from './components/editor'
import { Home } from './components/home'
import { Letter } from './components/letter'
import { InvoiceTable } from './components/invoice'
import { Receipt } from './components/receipt'
import { Contract } from './components/contract';

function App() {
  const [pageCount, setPageCount] = useState(0)
  const [rowCount, setRowCount] = useState(1)
  const [rowCollapsed, setRowCollapsed] = useState(false)
  const [isDeposit, setIsDeposit] = useState(false)
  const [packageItems, setPackageItems] = useState([])
  const templateRoutes = [
    {
      path: '/letterhead',
      name: 'Letter',
      Component: Letter,
      props: {
        docType: 'Letter',
        pageCount,
        setPageCount,
      },
    },
    {
      path: '/receipt',
      name: 'Receipt',
      Component: Receipt,
      props: {
        docType: 'Receipt',
        rowCount,
        setRowCount,
        rowCollapsed,
        setRowCollapsed,
        isDeposit,
        setIsDeposit
      },
    },
    {
      path: '/invoice',
      name: 'Invoice',
      Component: InvoiceTable,
      props: {
        docType: 'Invoice',
        rowCount,
        setRowCount,
        rowCollapsed,
        setRowCollapsed,
        isDeposit,
        setIsDeposit
      },
    },
    {
      path: '/contract',
      name: 'Contract',
      Component: Contract,
      props: {
        docType: 'Contract',
        packageItems,
        setPackageItems,
      },
    },
  ]

  const [isMobile, setIsMobile] = useState(false)

   useEffect(() => {
     // set breakpoint for JS
     setIsMobile(window.innerWidth <= 1148)
   }, [])

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          {templateRoutes.map(
            ({ name, path, Component, props }) => {
              return (
                <Route key={name} path={path} exact>
                  <DocumentEditor isMobile={isMobile} {...props}>
                    <Component {...props} />
                  </DocumentEditor>
                </Route>
              )
            }
          )}
        </Switch>
      </Router>
    </div>
  )
}

export default App
