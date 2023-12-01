import React from 'react'
import abc from '../../assets/images/sheep.png'
import './Contact.scss'
export default function BT7_Contact() {
  return (
    <>
    <h1>Contact</h1>
    <form action="">
      <label htmlFor="">Name</label>
      <input type="text" className='input'/>
      <br />
      <label htmlFor="">Phone</label>
      <input type="text" className='input' />
      <br />
      <label htmlFor="">Email</label>
      <input type="text" className='input'/>
      <br />
      <label htmlFor="">Website</label>
      <input type="text"  className='input'/>
      <br />
      <label htmlFor="">Messegae</label>
      <textarea name="" id="" cols="30" rows="10" className='input'></textarea>
      <br />
      <button>Submit</button>
    </form>
    </>
  )
}
