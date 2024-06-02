import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { apiData } from '../components/ContextApi';
import Container from '../components/Container';
import Flex from '../components/Flex';
import One01 from "../assets/one.png"
import { FaStar,FaRegStar ,} from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Faccordain from '../components/Faccordain';
import { addTocart } from '../components/slice/productSlice';

const ProductDetails = () => {
  let [singleData, setSingleData] = useState([])
  let productId = useParams()

  let data = useContext(apiData)
  let dispatch= useDispatch()


  let getData = () => {
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
      setSingleData(response.data);
    })
  }


  useEffect(() => {
    getData()
  }, [])

  let clientRating = Array.from({length:5},(elm , index)=>{

    let ratingNumber = index + 0.5 
    return(
      singleData.rating >= index + 1 ? <FaStar className='text-[#FFD881]' /> :   singleData.rating > ratingNumber ? <FaStarHalfAlt  />
      : <FaRegStar/>
    )
  })
   let handleAddTocart = (item)=>{
    dispatch(addTocart({...item,qun:1}) )
    
   }
 
  return (
    <>
      <section className='lg:pb-[500px] pb-[100px]'>
        <Container>
          <Flex className="flex-wrap justify-between ">
            {singleData?.images?.map((item)=>(

            <div className="w-[48%] my-4">
              <img src={item } alt="" />
            </div>
            ))}
            
          </Flex>
          <div className="lg:w-[50%]">
            <div className="">
              <h3 className='font-sans font-bold   text-[42px]  text-[#262626] '>Product</h3>
              <h4 className='font-sans font-bold pt-[20px]   text-[28px]  text-[#262626] '> brand :  {singleData.brand}</h4>
              <h5 className='font-sans font-bold pt-[20px]  text-[28px]  text-[#262626] '>category : {singleData.category}</h5>
            </div>
            <div className="flex items-center pt-[20px]">
              {clientRating}
              <div className="pl-3">
                <h4 className='font-sans font-semibold   text-[20px]  text-[#262626]  '>Review</h4>
              </div>
            </div>
            <div className=" pt-[20px]">
              <h4 className=' relative font-sans font-bold   text-[28px]  text-[#262626]  after:absolute after:content-[""] after:h-[1px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0' > price : {singleData.price}$</h4>
            </div>
            <div className="flex relative  pt-[50px] items-center after:absolute after:content-[''] after:h-[1px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0">
              <div className="">
                <h5 className='font-sans font-bold   text-[22px]  text-[#262626] '>QUANTITY:</h5>
              </div>
              <div className=" flex w-[120px] h-[40px] border-2 border-[#262626] justify-around items-center ml-[20px] ">
                <div className="">-</div>
                <div className="">0</div>
                <div className="">+</div>
              </div>
            </div>
            <div className="flex relative  pt-[50px] items-center after:absolute after:content-[''] after:h-[1px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0">
              <h3 className='font-sans font-bold   text-[22px]  text-[#262626] '>STATUS :</h3>
              <h4 className='font-sans font-semibold   text-[22px]  text-[#262626] ml-[20px]'>{singleData.stock}</h4>
            </div>
            <div className=" pt-[50px] lg:flex relative   after:absolute after:content-[''] after:h-[1px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0">
              <a className=' font-sans font-bold   lg:text-[22px]  text-[#262626] py-[16px] px-[45px] border-2 border-[#262626] inline-block duration-300 ease-in-out hover:bg-[#262626] hover:text-[#fff]'>Add to Wish List</a>
              <Link to={"/Cart"} onClick={()=>handleAddTocart(singleData)}>

              <a className=' font-sans font-bold   lg:text-[22px] bg-[#262626]  text-[#fff] py-[16px] lg:px-[45px] p-[63px]  border-2 border-[#262626] inline-block lg:ms-4  duration-300 ease-in-out hover:bg-[#fff] hover:text-[#262626]'>Add to Cart</a>
              </Link>
            </div>
            <div className="">
              <Faccordain/>
            </div>
           
          </div>
          <div className="flex pt-[100px] items-center">
            <h3 className='font-sans font-normal  text-[22px]  text-[#262626]   '>Description</h3>
            <h4 className='font-sans font-bold   text-[22px]  text-[#262626] ml-[50px] '>Reviews (1)</h4>
          </div>
          <div className=" pt-[50px] relative   after:absolute after:content-[''] after:h-[1px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 ">
            <p className='font-sans font-normal  text-[16px]  text-[#262626]   '>1 review for Product</p>
          </div>
          <div className="flex pt-[50px] items-center">
            <div className="">
              <h6 className='font-sans font-normal  text-[16px]  text-[#262626]   '>John Ford</h6>
            </div>
            <div className="">
              <div className="flex ml-[40px]">
                {clientRating}
              </div>
            </div>

          </div>
          <div className="pt-[50px] relative   after:absolute after:content-[''] after:h-[1px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 ">
            <p className='font-sans font-normal  text-[16px]  text-[#262626]   '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>



          <div className="lg:w-[50%] w-full">
            <h3 className=' pt-[80px] font-sans font-bold   text-[42px]  text-[#262626] '>Add a Review</h3>
            <div className="relative pt-5">
              <h2 className='font-sans font-bold   text-[22px]  text-[#262626] '>Name :</h2>
              <input placeholder='Your name here' type="search" className='lg:w-full w-full  lg:h-[50px]  h-[50px] top-[50px] border-b-2  outline-none  rounded-lg' />


            </div>
            <div className="relative pt-5">
              <h2 className='font-sans font-bold   text-[22px]  text-[#262626] '>Email :</h2>
              <input placeholder='Your Email here' type="search" className='lg:w-full w-full  lg:h-[50px]  h-[50px] top-[50px] border-b-2  outline-none  rounded-lg' />


            </div>
            <div className="relative pt-5">
              <h2 className='font-sans font-bold   text-[22px]  text-[#262626] '>Message :</h2>
              <input placeholder='Your Message here' type="search" className='lg:w-full w-full  lg:h-[50px]  h-[50px] top-[50px] border-b-2  outline-none  rounded-lg' />


            </div>
            <div className=" my-[100px] items-center">
              <h5 className=' h-[50px] w-[180px] border-2 border-[#262626] bg-[#000] font-sans font-bold   text-[16px]  text-[#fff] text-center duration-300 ease-in-out leading-[50px] hover:bg-[#fff] hover:text-[#262626]'>Post</h5>
            </div>

          </div>
        </Container>
      </section>
    </>
  )
}

export default ProductDetails
