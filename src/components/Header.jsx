import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingBag} from "react-icons/fi"
import { useSelector } from 'react-redux'

const Header = () => {
  const{cartItems} = useSelector((state)=>state.cart)
  return (
    <nav>
      <h2><a href="https://www.linkedin.com/in/shashankkumar27/" target="blank">E-kart</a></h2>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/cart'}>
          <FiShoppingBag />
          <p>{cartItems.length}</p>
        </Link>
      </div>
   </nav>
  )
}

export default Header