import React, { useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from "../assets/Logo.png"
import { FaBars } from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Header = () => {
  let [show , setShow] = useState (() =>{

  })
  
 
  return (
    <>
    <header className='h-[80px]   px-3'>
    <Container>
        <Flex className="justify-between items-center h-[80px]  ">
        <div className="w-[25%]">
          <img src={logo} alt="Logo" />
        </div>
        <div className="w-[75%] ">
          <ul className={` lg:flex justify-center z-50  text-center lg:gap-8  absolute lg:static duration-700 ease-in-out ${show == true ? " bg-slate-300 w-full top-[60px] left-0  " : "  w-full top-[-300px] left-[0px] " }`}>
            <li  className='font-sans cursor-pointer font-bold py-[20px] lg:py-0 text-[16px]  text-[#767676] duration-700 ease-in-out hover:lg:text-[#262626] hover:text-[#62d7f5b4]  hover:pl-[20px] hover:lg:pl-[0] hover:bg-white rounded-lg'>
            <Link to="/">Home</Link></li>
            <li className='font-sans cursor-pointer font-bold py-[20px] lg:py-0 text-[16px]  text-[#767676] duration-700 ease-in-out hover:lg:text-[#262626] hover:text-[#62d7f5b4]  hover:pl-[20px] hover:lg:pl-[0] hover:bg-white rounded-lg'>
              <Link to="/Product">Shop</Link>
            </li>
            <li className='font-sans cursor-pointer font-bold py-[20px] lg:py-0 text-[16px]  text-[#767676] duration-700 ease-in-out hover:lg:text-[#262626] hover:text-[#62d7f5b4]  hover:pl-[20px] hover:lg:pl-[0] hover:bg-white rounded-lg'>
              <Link to="/About">About</Link>
            </li>
            <li className='font-sans cursor-pointer font-bold py-[20px] lg:py-0 text-[16px]  text-[#767676] duration-700 ease-in-out hover:lg:text-[#262626] hover:text-[#62d7f5b4]  hover:pl-[20px] hover:lg:pl-[0] hover:bg-white rounded-lg'>
              <Link to="/Contacts">Contacts</Link>
            </li>
            <li className='font-sans cursor-pointer font-bold py-[20px] lg:py-0 text-[16px]  text-[#767676] duration-700 ease-in-out hover:lg:text-[#262626] hover:text-[#62d7f5b4]  hover:pl-[20px] hover:lg:pl-[0] hover:bg-white rounded-lg'>Journal</li>
          </ul>
        </div>
        <div className="lg:hidden cursor-pointer" onClick={()=>setShow (!show) }>
          {show == true ? <GiTireIronCross/>:<FaBars/>}
            
            
        </div>
        </Flex>
    </Container>
    </header>
    </>
  )
}

export default Header
