import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ItemCard from '../../components/ItemCard/ItemCard'
import './UserDetail.css'

const UserDetail = () => {
  
  const [product, setProduct] = useState({})

let {id} = useParams();

console.log(id)

  useEffect(() => {
    axios(`https://my-json-server.typicode.com/miguelmendozan/Api_productos/Productos/${id}`).then((res) => 
    setProduct(res.data))
  }, [id])
  
    return (
    <div className='detail-product'>
        <h1>Vista Detallada</h1>
        <ItemCard data={product}/>
    </div>
  )
}

export default UserDetail