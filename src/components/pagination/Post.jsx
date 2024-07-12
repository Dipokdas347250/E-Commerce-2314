import React, { useContext, useEffect, useState } from 'react'
import { apiData } from '../ContextApi'
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { addTocart } from '../slice/productSlice';

const Post = ({ allData, categorySearchFilter ,meltiList}) => {
  

  let [filtershow, setFilterShow] = useState([])

  let [catshow,setCatShow] = useState(true)
  let dispatch = useDispatch()

 


  useEffect(() => {
    let filterYou = categorySearchFilter.slice(0, 5)
    setFilterShow(filterYou)

  }, [categorySearchFilter])
  

  let handleShow = ()=>{
    setFilterShow(categorySearchFilter)
    setCatShow(false)
  }
  let handleHide = ()=>{
    let filterYou = categorySearchFilter.slice(0, 5)
    setFilterShow(filterYou)
    setCatShow(true)

  }
  let handlePcart= (item)=>{
    dispatch(addTocart({...item,qun:1}))
  }



  return (
    <>

      {categorySearchFilter.length > 0 ?

        <div className="">
          <div className="flex flex-wrap">
          {filtershow.map((item) => (

            <div className="lg:w-[32%]  py-5 ">
              <Link to={`/product/${item.id}`}>
                <div className="">

                  <div className="relative group overflow-hidden ">
                    <img src={item.thumbnail} className="lg:h-[200px] h-[200px]" alt="123" />
                    <div className="bg-[#fff] absolute duration-300 ease-in-out left-0 bottom-[-150px] h-[150px]  w-full group-hover:bottom-[0] flex items-center justify-end">
                      <ul className='pr-5'>
                        <li className='flex items-center justify-end gap-x-4  duration-300 ease-in-out font-sans font-bold   text-[16px]  text-[#262626] hover:text-[#767676]'>Add to Wish List <FaHeart /></li>
                        <li className='flex items-center  justify-end gap-x-4 py-3 duration-300 ease-in-out font-sans font-bold   text-[16px]  text-[#262626] hover:text-[#767676]'>Compear<TfiReload /></li>
                        <li className='flex items-center  justify-end gap-x-4 duration-300 ease-in-out font-sans font-bold   text-[16px]  text-[#262626] hover:text-[#767676]'>Add to Cart <FaShoppingCart /></li>
                      </ul>
                    </div>

                  </div>
                  <div className="flex justify-between py-[30px]">
                    <h2 className='font-sans font-bold   text-[16px]  text-[#262626] px-4'>{item.title}</h2>
                    <h3 className='font-sans font-bold   text-[18px]  text-[#262626] px-4'>${item.price}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {catshow ? categorySearchFilter.length > 5 &&
        
      
        <button onClick={handleShow} className=' border-2 border-[#222] h-[50px] w-[200px] rounded-3xl font-sans font-semibold text-[18px] text-[#000] text-center ml-[50%] translate-x-[-50%] duration-300 ease-in-out hover:bg-[#000] hover:text-[#fff]'>ShowAll</button>
        :
        <button onClick={handleHide}  className=' border-2 border-[#222] h-[50px] w-[200px] rounded-3xl font-sans font-semibold text-[18px] text-[#000] text-center ml-[50%] translate-x-[-50%] duration-300 ease-in-out hover:bg-[#000] hover:text-[#fff]' >Hide</button>
      
      }
        </div>
        :
        <div className={`${meltiList == "activeList" ? "" : "flex justify-between flex-wrap"}`}>
       { allData.map((item) => (

        <div className="lg:w-[32%] py-5 ">
          
            <div className="">

              <div className="relative group overflow-hidden ">
              <Link to={`/product/${item.id}`}>
                <img src={item.thumbnail} className="lg:h-[350px] h-[250px]" alt="123" />
                </Link>
                <div className="bg-[#fff] absolute duration-300 ease-in-out left-0 bottom-[-150px] h-[150px]  w-full group-hover:bottom-[0] flex items-center justify-end">
                  <ul className='pr-5'>
                    <li className='flex items-center justify-end gap-x-4  duration-300 ease-in-out font-sans font-bold   text-[16px]  text-[#262626] hover:text-[#767676] cursor-pointer'>Add to Wish List <FaHeart /></li>
                    <li className='flex items-center  justify-end gap-x-4 py-3 duration-300 ease-in-out font-sans font-bold   text-[16px]  text-[#262626] hover:text-[#767676] cursor-pointer'>Compear<TfiReload /></li>
                    <li onClick={()=>handlePcart(item)} className='flex items-center  justify-end gap-x-4 duration-300 ease-in-out font-sans font-bold   text-[16px]  text-[#262626] hover:text-[#767676] cursor-pointer'>Add to Cart <FaShoppingCart /></li>
                  </ul>
                </div>

              </div>
              <div className="flex justify-between py-[30px]">
                <h2 className='font-sans font-bold   text-[20px]  text-[#262626]'>{item.title}</h2>
                <h3 className='font-sans font-bold   text-[22px]  text-[#262626]'>${item.price}</h3>
              </div>
            </div>
          
        </div>
      ))}
       </div>
      }


    </>
  )
}

export default Post
