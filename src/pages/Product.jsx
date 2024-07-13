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
import { FaListUl } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";


const Product = () => {
 
  let data = useContext(apiData)

  let [currentPages, setCurrentpages] = useState(1)
  let [parPages, setPerPages] = useState(18)

  let LastPages = currentPages * parPages
  let FirstPages = LastPages - parPages


  let allData = data.slice(FirstPages, LastPages)


  let pageNumber = []
  let [category,setCategory] = useState([])
  let [categorySearchFilter,setCategorySearchFilter] = useState([])
   
  let [brande,setBrande] = useState([])
  let [priced,setPriced] = useState([])

  let [meltiList,setMeltiList] = useState("")
  let [lowPrice,setLowprice] = useState("")
  let [highPrice,setHighprice] = useState("")
  let [filterprice,setFilterprice] = useState([])


  for (let i = 0; i < Math.ceil( categorySearchFilter.length > 0 ? categorySearchFilter : data.length / parPages); i++) {
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
    
    
    setBrande([...new Set(data.map((item)=>item.brand)) ])
  },[data])
  
  useEffect(()=>{
    setPriced([...new Set(data.map((item)=>item.price)) ])
  },[data])
  
  
  let handleSubcate = (citem) =>{
    let categoryFilter = data.filter((item)=> item.category == citem)
    setCategorySearchFilter(categoryFilter)
    
  }

  let handleBrande = (citem) =>{
    let brandeFilter = data.filter((item)=> item.brand == citem)
    setCategorySearchFilter(brandeFilter)

    
  }

  let handlePrice = (value) =>{
   setLowprice(value.low)
   setHighprice(value.high)
   let priceFilter = data.filter((item)=>item.price > value.low && item.price < value.high)
   setFilterprice(priceFilter);
  }
  console.log(filterprice);
  
  


  
  let handlelist=  () =>{
    setMeltiList("activeList");
  }


  return (
    <>
      <section className='py-[124px] px-4 '>

        <Container>
          <div className=" items-center ">
            <h2 className='font-sans font-bold   text-[42px]  text-[#262626] '>Products</h2>
            <h3 className='font-sans font-bold   text-[16px]  text-[#262626] '>Home  +  Products</h3>
          </div>
          <Flex className="py-[100px] justify-between flex-wrap">
            <div className="lg:w-[28%] w-full ">
              <div className="">
                <div className="">
                 
                    <h2 onClick={()=>setCatShow (!catshow)}  className='font-sans font-bold   lg:text-[28px]  text-[#262626] flex justify-between items-center  cursor-pointer '>Shop by Category {catshow == true ?  <TiArrowSortedUp className='text-[28px] ' /> : <TiArrowSortedDown className='text-[28px] ' />}</h2>
                   
                    
                 {catshow &&
                 <ul className='overflow-y-scroll h-[300px] '>
                    {category.map((item)=>(

                 <li onClick={()=>handleSubcate(item)} className='  relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 cursor-pointer duration-300 ease-in-out hover:ml-[10px] '>{item}</li>
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
                  <ul className='overflow-y-scroll h-[300px] '>
                    {brande.map((item)=>(

                  <li  onClick={()=>handleBrande(item)} className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] cursor-pointer after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 duration-300 ease-in-out hover:ml-[10px]'>{item}</li>
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
                 
                  <ul className='overflow-y-scroll h-[300px] '>
                   

                  <li onClick={()=>handlePrice({low:0 , high:10})} className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 cursor-pointer duration-300 ease-in-out hover:ml-[10px]'>0$ - 10$</li>
                  <li onClick={()=>handlePrice({low:10 , high:20})} className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 cursor-pointer duration-300 ease-in-out hover:ml-[10px]'>10$ - 20$</li>
                  <li onClick={()=>handlePrice({low:20 , high:50})} className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 cursor-pointer duration-300 ease-in-out hover:ml-[10px]'>20$ - 50$</li>
                  <li onClick={()=>handlePrice({low:50 , high:100})} className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 cursor-pointer duration-300 ease-in-out hover:ml-[10px]'>50$ - 100$</li>
                  <li onClick={()=>handlePrice({low:100 , high:500})} className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 cursor-pointer duration-300 ease-in-out hover:ml-[10px]'>100$ - 500$</li>
                  <li onClick={()=>handlePrice({low:500 , high:1000})} className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 cursor-pointer duration-300 ease-in-out hover:ml-[10px]'>500$ - 1000$</li>
                  <li onClick={()=>handlePrice({low:1000 , high:2000})} className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 cursor-pointer duration-300 ease-in-out hover:ml-[10px]'>1000$ - 2000$</li>
                  <li onClick={()=>handlePrice({low:2000 , high:4000})} className=' relative font-sans font-semibold   text-[16px]  text-[#262626] mt-[20px] mb-[40px] after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 cursor-pointer duration-300 ease-in-out hover:ml-[10px]'>2000$ - 4000$</li>
                   
                
                </ul>
                 }
                  
                </div>
              </div>
            </div>
            <div className="lg:w-[68%] w-full">
              <div className=" lg:flex items-center justify-around ">
                <div className="lg:w-[20%]  w-[full] flex justify-around lg:px-0  px-10    items-center  ">
                 <div onClick={()=>setMeltiList("")} className={`lg:h-[50px] h-[40px] lg:w-[50px] w-[40px] flex justify-center items-center text-[#000] ${meltiList == "activeList" ? "bg-[#fff]" : "bg-[#000] text-[#fff]" }  duration-300 ease-in-out border-[1px] border-[#000] text-[20px]`}>
                 < IoGrid />
                 </div>
                 <div onClick={handlelist} className={`lg:h-[50px] h-[40px] lg:w-[50px] w-[40px] flex justify-center items-center text-[#000] ${meltiList == "activeList" ? "bg-[#000] text-[#fff]" : "bg-[#fff]" }  duration-300 ease-in-out border-[1px] border-[#000] text-[20px]`}>
                 < FaListUl/>
                 </div>
                </div>
                <div className="lg:w-[45%] w-
                [100%]">
                  <div className="">
                  <label htmlFor="" className='text-[16px] font-sans text-[#767676] font-normal'>Sort by: </label>
                    <select name="" id="" className='border-[1px] border-[#767676] rounded-sm text-start lg:px-[100px] px-[70px] py-[8px] text-[16px] font-sans text-[#767676] font-normal lg:mt-0 mt-[20px]'>
                      <option value="">Featured...</option>
                      <option value="">30</option>
                      <option value="">24</option>
                    </select>
                    {/* <div className="relative flex items-center gap-x-2">
                      <h4 className='font-sans font-bold   text-[16px]  text-[#262626]'>Sort by:</h4>
                      <input placeholder='Featured...' type="search" className='lg:w-[70%] w-[65%]  lg:h-[50px]  h-[50px] top-[50px] border-2  outline-none px-3 rounded-lg ' />
                      <div className="absolute top-[50%] translate-y-[-50%] right-[50px] text-[26px]">
                        <TiArrowSortedDown />
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="lg:w-[35%] w-full">
                <div className="">
                    <label htmlFor="" className='text-[16px] font-sans text-[#767676] font-normal'>Show : </label>
                    <select name="" id="" className='border-[1px] border-[#767676] rounded-sm text-start lg:px-[90px] px-[90px] py-[8px] text-[16px] font-sans text-[#767676] font-normal lg:mt-0 mt-[20px]'>
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
              <div className="">
                <Post allData={allData} categorySearchFilter={categorySearchFilter} meltiList={meltiList} filterprice={filterprice} />

              </div>
              <div className="lg:text-end">
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
