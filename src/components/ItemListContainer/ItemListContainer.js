import React from 'react'
import './ItemListContainer.css'
const ItemListContainer = ({greeting, img}) => {
  return (
    <div className='ItemList'>
        <h1>{greeting}</h1>
        <img src={img} alt='skating'></img>
    </div>
  )
}

export default ItemListContainer