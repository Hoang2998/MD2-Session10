import React,{useState} from 'react'
import {Link,Outlet} from 'react-router-dom'
import Invoice from '../Invoice/Invoice'
export default function Invoices() {
    const [invoices,setInvoices] = useState([
        {
            id:1,
            name:"google"
        },
        {
            id:2,
            name:"apple"
        },
    ])
  return (
    <>
    <h1>
        Invoices
    </h1>
    <div>
    <Link to={'/NewInvoice'} > Creat Nem Invoice</Link>
    <br />
    {
        invoices.map((item)=>{
            
            return <div key={item.id}>
                <Link  to={`/Invoices/${item.id}`}> {item.name}</Link> 
            </div> 
        })
    }
    </div>
    <Outlet></Outlet>
    </>
  )
}
