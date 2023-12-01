import React from 'react'
// import HomePage from './pages/Home/HomePage'
import {Route, Routes} from 'react-router-dom'
import Homepage from './components/BT7hompage/Homepage'
import BT7_About from './components/BT7_About/BT7_About'
import BT7_User from './components/BT7_User/BT7_User'
import BT7_Contact from './components/BT7_Contact/BT7_Contact'
import UseDetail from './components/BT7_UsrDetail/UseDetail'
import BT7home from './components/BT7/BT7home'
// import Invoices from './components/Invoices/Invoices'
// import Express from './components/Express/Express'
// import NewInvoice from './components/NewInvoice/NewInvoice'
// import Invoice from './components/Invoice/Invoice'
import './App.css'
export default function App() {
  return (
    <>
    <BT7home></BT7home>
    <Routes>
      <Route path='/' element={<Homepage></Homepage>}></Route>
      <Route path='/About' element={<BT7_About></BT7_About>}></Route>
      <Route path='/User' element={<BT7_User></BT7_User>}>
        <Route path=':userId' element={<UseDetail></UseDetail>}/>
      </Route>
      <Route path='/Contact' element={<BT7_Contact/>}></Route>
    </Routes>



    {/* <h1>Rikkei Academi</h1>
    <HomePage></HomePage>
    <Routes>
    <Route path='/Invoices' element={<Invoices></Invoices>}>
      <Route path=':Invoice' element={<Invoice></Invoice>}></Route>
      </Route> 
    <Route path='/NewInvoice' element={<NewInvoice/>}></Route>
    <Route path='/Express' element={<Express></Express>}></Route>  
    </Routes> */}
    </>
   
  )
}
