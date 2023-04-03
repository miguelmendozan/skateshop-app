import React, {useEffect, useState} from 'react'
import './ItemListContainer.css'
import axios from 'axios'
import ItemCard from '../ItemCard/ItemCard'
import {Link} from 'react-router-dom'


const ItemListContainer = () => {

const [products, setProducts] = useState([])

useEffect(() => {
  axios("https://my-json-server.typicode.com/miguelmendozan/Api_productos/Productos").then((res) => 
  setProducts(res.data)
  )
}, [])

  return (
    <div className='ItemList'>
        {products.map((product) => {
          return (
            <div className='itemCard' key={product.id} > 
            <Link to={`/product-detail/${product.id}`}>
            <ItemCard data={product} />
            </Link>
          </div>
          )
        })}
    </div>

  )
}

export default ItemListContainer