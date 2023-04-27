import React from 'react'
import './nav.css'
import ShopBag from '../ShopBag/ShopBag'
import { Link } from 'react-router-dom'

const NavBar = () => {


  return (
    <nav className='nav'>
        <ul className='list'>
            <Link className='logo' to='/'><h1>Miga Sk8</h1></Link>
            <Link className='linkNav' to='/Skateboarding'>Skateboarding </Link>
            <Link className='linkNav'to='/Zapas' >Zapas</Link>
            <Link className='linkNav'to='/Ropa' >Ropa</Link>
            <Link className='linkNav'to='/Cart'><ShopBag className='linkNav'/></Link>
            
        </ul>
    </nav>
  )
}

export default NavBar