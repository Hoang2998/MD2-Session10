import React,{useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'

export default function Invoice() {
    const [invoicesa,setInvoices] = useState([
        {
            id:1,
            name:"google"
        },
        {
            id:2,
            name:"apple"
        },
    ])
const {Invoice} = useParams()
console.log(Invoice);
const [newa,setNewa] = useState("1")

useEffect(()=>{
    let result = invoicesa.find((item)=>{
        return item.id == Invoice
    })
    setNewa(result.name)
},[Invoice])
  return (
    <div>Invoice for {newa}</div>
  )
}
