import React, { useContext, useEffect, useState } from 'react'
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
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";


const Product = () => {
 
  let data = useContext(apiData)

  let [currentPages, setCurrentpages] = useState(1)
  let [parPages, setPerPages] = useState(9)

  let LastPages = currentPages * parPages
  let FirstPages = LastPages - parPages


  let allData = data.slice(FirstPages, LastPages)


  let pageNumber = []
   
  let [category,setCategory] = useState([])
  let [brande,setBrande] = useState([])
  let [priced,setPriced] = useState([])


  for (let i = 0; i < Math.ceil(data.length / parPages); i++) {
    pageNumber.push(i)
  }

  let paginate = (pageNumber) => {
    setCurrentpages(pageNumber + 1);
  }
  let next = () => {
    if (currentPages < pageNumber.length) {
      setCurrentpages((state) => state + 1)

    }
  }
  let prev = () => {
    if (currentPages > 1) {
      setCurrentpages((state) => state - 1)
    }
  }
  let [catshow, setCatShow] = useState(false)
  let [Colorshow,setColorShow] = useState(false)
  let [brandshow,setBrandShow] = useState(false)
  let [priceshow,setPriceShow] = useState(false)


  useEffect(()=>{
    setCategory([...new Set(data.map((item)=>item.category))])
    
  },[data])
  useEffect(()=>{
    setBrande([...new Set(data.map((item)=>item.brand)) ])
  },[data])
  useEffect(()=>{
    setPriced([...new Set(data.map((item)=>item.price)) ])
  },[data])
   console.log(priced);
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
                 
                    <h2 onClick={()=>setCatShow (!catshow)}  className='font-sans font-bold   lg:text-[28px]  text-[#262626] flex justify-between items-center cursor-pointer '>Shop by Category {catshow == true ?  <TiArrowSortedUp className='text-[28px]' /> : <TiArrowSortedDown className='text-[28px]' />}</h2>
                   
                    
                 {catshow &&
                 <ul className=''>
                    {category.map((item)=>(

                 <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0'>{item}</li>
                    ))}
               
               </ul>
                 }
                  
                </div>
              </div>
              <div className="">
                <div className="py-[30px]">
                  <div className=" ">
                    <h2 onClick={()=>setColorShow (!Colorshow)} className='font-sans font-bold   lg:text-[28px]  text-[#262626] flex justify-between items-center cursor-pointer '>Shop by Color {Colorshow == true ? <TiArrowSortedUp className='text-[28px]' /> : <TiArrowSortedDown className='text-[28px]' />} </h2>
                    
                  </div>
                  {Colorshow &&
                   <ul className=''>
                    
                   <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] pl-[30px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 before:absolute before:content-[""] before:h-[20px] before:w-[20px] before:bg-[#000] before:top-0 before:left-0 before:rounded-full'>Color 1</li>
                   <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] pl-[30px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 before:absolute before:content-[""] before:h-[20px] before:w-[20px] before:bg-[#FF8686] before:top-0 before:left-0 before:rounded-full'>Color 2</li>
                   <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] pl-[30px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 before:absolute before:content-[""] before:h-[20px] before:w-[20px] before:bg-[#7ED321] before:top-0 before:left-0 before:rounded-full'>Color 3</li>
                   <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] pl-[30px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 before:absolute before:content-[""] before:h-[20px] before:w-[20px] before:bg-[#979797] before:top-0 before:left-0 before:rounded-full'>Color 4</li>
                   <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] pl-[30px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 before:absolute before:content-[""] before:h-[20px] before:w-[20px] before:bg-[#15CBA5] before:top-0 before:left-0 before:rounded-full'>Color 5</li>
                 </ul>
                  }

                 
                </div>
              </div>
              <div className="">
                <div className="py-[30px]">
                  <div className=" ">
                    <h2 onClick={()=>setBrandShow(!brandshow)} className='font-sans font-bold   lg:text-[28px]  text-[#262626] flex justify-between items-center cursor-pointer '>Shop by Brand {brandshow == true ? <TiArrowSortedUp className='text-[28px]' /> : <TiArrowSortedDown className='text-[28px]' />} </h2>
                    
                  </div>
                  {brandshow &&
                  <ul className=''>
                    {brande.map((item)=>(

                  <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0'>{item}</li>
                    ))}
                 
                </ul>
                  }
                  
                </div>
              </div>
              <div className="">
                <div className="py-[30px]">
                  <div className=" ">
                    <h2 onClick={()=>setPriceShow(!priceshow)} className='font-sans font-bold   lg:text-[28px]  text-[#262626] flex justify-between items-center cursor-pointer '>Shop by Price {priceshow == true ? <TiArrowSortedUp className='text-[28px]' /> : <TiArrowSortedDown className='text-[28px]' /> }</h2>
                    
                  </div>
                  {priceshow &&
                  <ul className=''>
                    {priced.map((item)=>(

                  <li className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0'>${item}</li>
                    ))}
                
                </ul>
                  }
                  
                </div>
              </div>
            </div>
            <div className="w-[68%]">
              <div className=" lg:flex items-center">
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
                      <input placeholder='Featured...' type="search" className='lg:w-[70%] w-[65%]  lg:h-[50px]  h-[50px] top-[50px] border-2  outline-none px-3 rounded-lg ' />
                      <div className="absolute top-[50%] translate-y-[-50%] right-[50px] text-[26px]">
                        <TiArrowSortedDown />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[25%] w-full">
                <div className="">
                    <label htmlFor="" className='text-[16px] font-sans text-[#767676] font-normal'>Show : </label>
                    <select name="" id="" className='border-[1px] border-[#767676] rounded-sm text-start lg:px-[60px] px-[25px] py-[5px] text-[16px] font-sans text-[#767676] font-normal'>
                      <option value="">36</option>
                      <option value="">30</option>
                      <option value="">24</option>
                    </select>
                  </div>
                  {/* <div className="">
                    <div className="relative flex items-center lg:gap-x-2 gap-x-[22px]  pt-[10px] lg:pt-0">
                      <h4 className='font-sans font-bold   text-[16px]  text-[#262626]'>Show:</h4>
                      <input placeholder='36' type="search" className='lg:w-[70%] w-[65%]  lg:h-[50px]  h-[50px] top-[50px] border-2  outline-none px-7 rounded-lg ' />
                      <div className="absolute top-[50%] translate-y-[-50%] lg:right-[30px] right-[60px] text-[26px]">
                        <TiArrowSortedDown  className='mt-[10px] lg:mt-0' />
                        <option value=""></option>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="flex justify-between flex-wrap">
                <Post allData={allData} />

              </div>
              <div className="text-end">
                <PaginationArea pageNumber={pageNumber} paginate={paginate} currentPages={currentPages} next={next} prev={prev} />
              </div>

            </div>
          </Flex>
        </Container>
      </section>
    </>
  )
}

export default Product
