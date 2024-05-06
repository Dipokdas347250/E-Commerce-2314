import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch , FaUser  } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";
import Cartimg from "../assets/Cart.png"

const Navber = () => {
    let [cartShow, setCartShow] = useState(false)
    
    let [userShow, setUserShow] = useState(false)
    let [myShow, setMyShow] = useState(false)
   

    let cartref = useRef()
    let usertref = useRef()
    let mytref = useRef()
    
   

    useEffect (() =>{
    document.addEventListener("click",(e)=>{
       if(cartref.current.contains(e.target) == true){
        setCartShow(!cartShow)
       }else{
        setCartShow(false)
       }
       if(usertref.current.contains(e.target) == true){
        setUserShow(!userShow)
       }else{
        setUserShow(false)
       }
       if(mytref.current.contains(e.target) == true){
        setMyShow(!myShow)

       }else{
        setMyShow(false)
       }
    })
    },[cartShow,userShow,myShow])
  return (
   <>
   <div className="bg-[#D8D8D8] lg:h-[100px] h-[200px] ">
   <Container >
    <Flex className=" lg:h-[100px]  lg:items-center " >
        <div className=" lg:w-[35%] w-full relative">
            <div className="">
                <div ref={cartref} className="flex lg:items-center items-center  gap-x-3">
                    <FaBarsStaggered/>
                    <h2 className='font-sans cursor-pointer font-bold py-[20px] lg:py-0 text-[16px]  text-[#767676] hover:lg:text-[#262626] hover:text-[#62d7f5b4] hover:duration-700 ease-in-out'>Shop by Category</h2>
                </div>
            </div>
            {cartShow &&
            <div className=" absolute top-[55px] left-0 bg-[#262626] w-[300px] rounded-lg">
                <ul>
                    <li className='text-[rgba(255,255,255,0.9)] font-sans text-[16px] cursor-pointer py-2 pl-3 duration-500 ease-in-out hover:pl-6 '>Accesories</li>
                    <li className='text-[rgba(255,255,255,0.9)] font-sans text-[16px] cursor-pointer py-2 pl-3 duration-500 ease-in-out hover:pl-6'>Furniture</li>
                    <li className='text-[rgba(255,255,255,0.9)] font-sans text-[16px] cursor-pointer py-2 pl-3 duration-500 ease-in-out hover:pl-6'>Electronics</li>
                    <li className='text-[rgba(255,255,255,0.9)] font-sans text-[16px] cursor-pointer py-2 pl-3 duration-500 ease-in-out hover:pl-6'>Clothes</li> 
                    <li className='text-[rgba(255,255,255,0.9)] font-sans text-[16px] cursor-pointer py-2 pl-3 duration-500 ease-in-out hover:pl-6'>Bags</li>
                    <li className='text-[rgba(255,255,255,0.9)] font-sans text-[16px] cursor-pointer py-2 pl-3 duration-500 ease-in-out hover:pl-6'>Home appliances</li>
                </ul>
            </div>
            }
        </div>
        <div className="lg:w-[40%] w-full">
            <div className="">
                <div className="relative">
                    <input placeholder='search...' type="search" className='lg:w-full  lg:h-[50px]  h-[50px] top-[50px] border-2 border-[#262626] outline-none px-3 rounded-lg' />
                    <div className="absolute top-[50%] translate-y-[-50%] right-[20px]">
                    <FaSearch/>
                    </div>

                </div>
            </div>
        </div>
        <div className="lg:w-[25%] w-full relative">
            <div className="flex justify-end  gap-x-3">
                <div ref={mytref} className="flex cursor-pointer">
                <FaUser />
                <MdOutlineKeyboardArrowDown/>
                </div>
                {myShow &&
                <div className="absolute top-[40px] right-[40px]">
                    <div className="">
                        <a className='w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px] font-sans font-normal   text-[16px] bg-[#000]  text-[#fff] duration-500 ease-in-out hover:bg-[#fff] hover:text-[#262626]' href="#">My Account</a>
                    </div>
                    <div className="">
                        <a  className='w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px] font-sans font-normal   text-[16px]  text-[#262626] duration-500 ease-in-out hover:bg-[#000] hover:text-[#fff]' href="#">Log Out</a>
                    </div>
                </div>
                  }
                <div ref={usertref} className="cursor-pointer">
                    <FaShoppingCart/>

                </div>
            </div>


          
             {userShow &&
            <div className="">
            <div className="w-[360px] bg-[#F5F5F3] absolute top-[40px] right-0">
              <div className="py-3">
              <div className="flex justify-around items-center">
                <div className="">
                    <img src={Cartimg} alt="" />
                </div>
                <div className="font-sans  font-bold   text-[16px]  text-[#262626]">
                    <h2>Black Smart Watch</h2>
                    <h3>$44.00</h3>
                </div>
                <div className="">
                    <GiTireIronCross/>
                </div>
                </div>
                
              </div>
            </div>
            <div className="w-[360px] bg-[#fff] absolute top-[150px] right-0">
                    <h2 className='pl-5 font-sans font-medium   text-[16px]  text-[#262626]'>Subtotal: <span className='font-sans  font-bold   text-[16px]  text-[#262626]'> $44.00</span></h2>
                    <div className="flex justify-around pt-2">
                        <div className="">
                            <a className='w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px] font-sans font-normal   text-[16px] bg-[#000]  text-[#fff] duration-500 ease-in-out hover:bg-[#fff] hover:text-[#262626]' href="#">View Cart</a>
                        </div>
                        <div className="">
                            <a className='w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px] font-sans font-normal   text-[16px]  text-[#262626] duration-500 ease-in-out hover:bg-[#000] hover:text-[#fff]' href="#">Checkout</a>
                        </div>
                    </div>
                </div>
                </div>
                
            
             }

            
        </div>
        
    </Flex>
   </Container>
   </div>
   </>
  )
}

export default Navber
