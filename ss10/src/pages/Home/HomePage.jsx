import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import Invoices from '../../components/Invoices/Invoices'
import Express from '../../components/Express/Express'
import './HomePage.scss'
// import './HomePage.scss'

export default function HomePage() {
  return (
    <>
    {/* <Header></Header> */}
    <div className='flex ' >
      <NavLink to={'/Invoices'}>
        Invoices
      </NavLink>
      <div>|</div>
      <NavLink to={'/Express'}>
        Express
      </NavLink>
    </div>
    </>
  )
}
