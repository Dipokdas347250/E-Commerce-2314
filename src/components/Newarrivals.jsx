import React, {  useState,useEffect, useContext} from 'react'
import Container from './Container'
import Flex from './Flex'
import Arrivlsitem from './Arrivlsitem'
import { apiData } from './ContextApi'


const Newarrivals = () => {
     let data = useContext(apiData)
   
    
  return (
   <section className=''>
    <Container>
        <h2 className=' font-sans font-bold   text-[32px]  text-[#262626]'>New Arrivals</h2>
        <Flex className="justify-between flex-wrap lg:py-[80px]">
            {data.map((item)=>(

         <Arrivlsitem item={item}/>
            ))}
         
        </Flex>
    </Container>
   </section>
  )
}

export default Newarrivals
