import React from 'react'
import {Link,Outlet} from 'react-router-dom'

export default function BT7home() {
  return (
    <>
    <ul className='flex gap-5 p-3 bg-slate-500 text-white'>
        <li> <Link to={'/'}>Hompage</Link> </li>
        <li> <Link to={'/About'}>About</Link> </li>
        <li> <Link to={'/User'}>User</Link> </li>
        <li> <Link to={'/Contact'}>Contact</Link> </li>
    </ul>
    </>
  )
}
