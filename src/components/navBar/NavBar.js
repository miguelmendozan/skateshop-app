import React from 'react'
import './nav.css'
import ShopBag from '../ShopBag/ShopBag'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className='nav'>
        <ul className='list'>
            <Link className='logo' to='/'><h1>Miga Sk8</h1></Link>
            <Link className='linkNav' to='/Skates'>Skates </Link>
            <Link className='linkNav'to='/Zapas' >Zapas</Link>
            <Link className='linkNav'to='/Marcas' >Marcas</Link>
            <ShopBag className='linkNav'/>
        </ul>
    </nav>
  )
}

export default NavBar