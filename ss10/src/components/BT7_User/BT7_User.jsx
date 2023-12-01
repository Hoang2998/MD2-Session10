import React,{useState} from 'react'
import abc from '../../assets/images/sheep.png'

export default function BT7_User() {
  const [users,setUsers] = useState([
    {
        id:1,
        img:abc,
        content:"lorem"
    }
  ])
  return (
    <div>BT7_User</div>
  )
}
