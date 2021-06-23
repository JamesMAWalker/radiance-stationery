import './App.scss'
import React, { useEffect, useState } from 'react'
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom'
import axios from 'axios'

import { DocumentEditor } from './components/editor'
import { Home } from './components/home'
import { Invoice } from './components/invoice'
import { InvoiceTable } from './components/invoiceFlex'
import { Letter } from './components/letter'

// const getUsersData = () => {
//   return axios
//     .get('https://randomuser.me/api/?results=5')
//     .then((res) => {
//       return res.data.results
//     })
//     .catch((err) => 
// }

function App() {
  const [pageCount, setPageCount] = useState(0)
  const [rowCount, setRowCount] = useState(1)
  const [rowCollapsed, setRowCollapsed] = useState(false)
  const [isDeposit, setIsDeposit] = useState(false)
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
  ]

  // const [userData, setUserData] = useState([])
  // const [flattenedLocations, setFlattenedLocations] = useState([])
  // 

  // const extractObjectKeys = (object) => {
  //   let objectKeys = []

  //   Object.keys(object).forEach(objectKey => {
  //     const value = object[objectKey]
  //     if (typeof value !== 'object') {
  //       objectKeys.push(objectKey)
  //     } else {
  //       objectKeys = [...objectKeys, ...extractObjectKeys(value)]
  //     }
  //   })
  //   return objectKeys
  // }

  // const flattenLocations = (locations) => {
  //   const flattenedLocationHeaders = extractObjectKeys(locations[0])
  //   const data = []
  //   for (const { street, coordinates, timezone, ...rest } of locations) {
  //     data.push({
  //       ...rest,
  //       name: street.name,
  //       number: street.number,
  //       latitude: coordinates.latitude,
  //       longitude: coordinates.longitude,
  //       offset: timezone.offset,
  //       description: timezone.description,
  //     })
  //   }
    
  //   return { headers: flattenedLocationHeaders, data}
  // }

  // useEffect(() => {
  //   getUsersData()
  //     .then((userAPIData) => {
  //       setUserData(userAPIData)
  //       setFlattenedLocations(
  //         flattenLocations(
  //           userAPIData.map(({ location }) => location)
  //         )
  //       )
  //     })
  // }, [])

  // useEffect(() => {
  //   
  // }, [flattenedLocations])
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
            {/* <div
              style={{
                minHeight: '40vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h1>Here be the Data:</h1>
              <table>
                <thead>
                  <tr>
                    {flattenedLocations.headers &&
                      flattenedLocations.headers.map(
                        (locationString, idx) => (
                          <th key={idx}>{locationString}</th>
                        )
                      )}
                  </tr>
                </thead>
                <tbody>
                  {flattenedLocations.data &&
                    flattenedLocations.data.map((location, locationIdx) => (
                      <tr key={locationIdx}>
                        {flattenedLocations.headers.map((header, cellIdx) => {
                          return <td key={cellIdx}>{location[header]}</td>
                        })}
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div> */}
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
