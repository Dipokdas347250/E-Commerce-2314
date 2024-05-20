import React, { useContext, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { apiData } from '../components/ContextApi'

import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Post from '../components/pagination/Post';
import PaginationArea from '../components/pagination/PaginationArea';

import { IoGrid } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { TiArrowSortedDown ,TiArrowSortedUp } from "react-icons/ti";

const Product = () => {
  let data = useContext(apiData)
  
  let [currentPages,setCurrentpages] = useState(1)
  let [parPages,setPerPages] = useState(9)

  let LastPages = currentPages * parPages
  let FirstPages = LastPages - parPages
  
   
  let allData = data.slice(FirstPages , LastPages )


  let pageNumber =[]

  for ( let i= 0; i < Math.ceil(data.length / parPages); i++){
    pageNumber.push(i)
  }

  let  paginate = (pageNumber)=>{
    setCurrentpages(pageNumber + 1);
  }
  
 
  return (
    <>
      <section className='py-[124px] '>
        
        <Container>
        <div className=" items-center ">
          <h2 className='font-sans font-bold   text-[42px]  text-[#262626] '>Products</h2>
          <h3 className='font-sans font-bold   text-[16px]  text-[#262626] '>Home  +  Products</h3>
        </div>
          <Flex className="py-[100px] justify-between flex-wrap">
            <div className="w-[28%]">
              <div className="">
                <div className="">
                  <ul className=''>
                    <li className='font-sans font-bold   lg:text-[28px]  text-[#262626]'>Shop by Category</li>
                    <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0'>Category 1</li>
                    <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0'>Category 2</li>
                    <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0'>Category 3</li>
                    <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0'>Category 4</li>
                    <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0'>Category 5</li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="py-[100px]">
                  <div className=" flex justify-between items-center">
                    <h2 className='font-sans font-bold   lg:text-[28px]  text-[#262626] '>Shop by Color</h2>
                    <TiArrowSortedUp className='text-[28px]'/>
                  </div>
                
                  <ul className=''>
                    
                    <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] pl-[30px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 before:absolute before:content-[""] before:h-[20px] before:w-[20px] before:bg-[#000] before:top-0 before:left-0 before:rounded-full'>Color 1</li>
                    <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] pl-[30px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 before:absolute before:content-[""] before:h-[20px] before:w-[20px] before:bg-[#FF8686] before:top-0 before:left-0 before:rounded-full'>Color 2</li>
                    <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] pl-[30px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 before:absolute before:content-[""] before:h-[20px] before:w-[20px] before:bg-[#7ED321] before:top-0 before:left-0 before:rounded-full'>Color 3</li>
                    <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] pl-[30px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 before:absolute before:content-[""] before:h-[20px] before:w-[20px] before:bg-[#979797] before:top-0 before:left-0 before:rounded-full'>Color 4</li>
                    <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] pl-[30px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 before:absolute before:content-[""] before:h-[20px] before:w-[20px] before:bg-[#15CBA5] before:top-0 before:left-0 before:rounded-full'>Color 5</li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="py-[70px]">
                <div className=" flex justify-between items-center">
                    <h2 className='font-sans font-bold   lg:text-[28px]  text-[#262626] '>Shop by Brand</h2>
                    <TiArrowSortedUp className='text-[28px]'/>
                  </div>
                  <ul className=''>
                    
                    <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0'>Brand 1</li>
                    <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0'>Brand 2</li>
                    <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0'>Brand 3</li>
                    <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0'>Brand 4</li>
                    <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0'>Brand 5</li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="py-[70px]">
                <div className=" flex justify-between items-center">
                    <h2 className='font-sans font-bold   lg:text-[28px]  text-[#262626] '>Shop by Price</h2>
                    <TiArrowSortedUp className='text-[28px]'/>
                  </div>
                  <ul className=''>
                    
                    <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0'>$0.00-$9.99</li>
                    <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0'>$10.00-$19.99</li>
                    <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0'>$20.00-$29.99</li>
                    <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0'>$30.00-$39.99</li>
                    <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0'>$40.00-$49.99</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-[68%]">
              <div className="flex items-center">
              <div className="w-[40%]  flex lg:gap-x-8 items-center  ">
                <div className=" lg:border-2 lg:border-black lg:h-[50px] lg:w-[50px]  text-center  ">
                < IoGrid className=' text-black text-[24px] font-sans font-bold  text-center leading-[50px] mt-[10px] ml-[10px]  ' />
                </div>
                <div className=" lg:border-2 lg:border-black lg:h-[50px] lg:w-[50px] text-center   ">
                < FaBars className=' text-black text-[24px] font-sans font-bold  text-center leading-[50px] mt-[11px] ml-[11px]' />
                </div>
               

              </div>
              <div className="lg:w-[35%] w-full">
                <div className="">
                  <div className="relative flex items-center gap-x-2">
                    <h4 className='font-sans font-bold   text-[16px]  text-[#262626]'>Sort by:</h4>
                  <input placeholder='Featured...' type="search" className='lg:w-[70%]  lg:h-[50px]  h-[50px] top-[50px] border-2  outline-none px-3 rounded-lg' />
                    <div className="absolute top-[50%] translate-y-[-50%] right-[70px] text-[26px]">
                    <TiArrowSortedDown/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-[25%] w-full">
              <div className="">
                  <div className="relative flex items-center gap-x-2">
                    <h4 className='font-sans font-bold   text-[16px]  text-[#262626]'>Show:</h4>
                  <input placeholder='36' type="search" className='lg:w-[70%]  lg:h-[50px]  h-[50px] top-[50px] border-2  outline-none px-7 rounded-lg' />
                    <div className="absolute top-[50%] translate-y-[-50%] right-[30px] text-[26px]">
                    <TiArrowSortedDown/>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="flex justify-between flex-wrap">
                <Post allData={allData}/>
              
              </div>
               <div className="text-end">
                <PaginationArea pageNumber={pageNumber} paginate={paginate} />
               </div>
              
            </div>
          </Flex>
        </Container>
      </section>
    </>
  )
}

export default Product
