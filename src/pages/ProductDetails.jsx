import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiData } from '../components/ContextApi';
import Container from '../components/Container';

const ProductDetails = () => {
    let [singleData , setSingleData] = useState ([])
    let productId = useParams()

    let data = useContext(apiData)
   

    let getData = () =>{
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{
            setSingleData(response.data);
        })
    }
     

    useEffect(()=>{
      getData()
    },[])

    console.log(singleData);
  return (
   <>
    <Container>
    {data.map((item)=>(
      <h2>{item.price}</h2>
    ))}
    </Container>
   </>
  )
}

export default ProductDetails
