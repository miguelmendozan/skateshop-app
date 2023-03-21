import React from 'react'
import './nav.css'
import ShopBag from '../ShopBag/ShopBag'
const NavBar = () => {
  return (
    <nav className='nav'>
        <ul className='list'>
            <li><h1>TheSkateShop</h1></li>
            <li>Skates</li>
            <li>Zapas</li>
            <li>Marcas</li>
            <ShopBag/>
            
        </ul>
    </nav>
  )
}

export default NavBar