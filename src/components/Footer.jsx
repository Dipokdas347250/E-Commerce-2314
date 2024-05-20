import React from 'react'
import Container from './Container'
import Flex from './Flex'
import LogoImg from "../assets/Logo.png"
import { FaFacebookF,FaLinkedinIn,FaInstagram  } from "react-icons/fa";

const Footer = () => {
  return (
   <>
   <footer className='bg-[#F5F5F3] py-[55px]'>
    <Container>
        <Flex className="  justify-between flex-wrap ">
           
                <div className="lg:w-[15%]">
                    <div className="">
                    <ul className=''>
                        <li className='font-sans font-bold   text-[18px]  text-[#262626] py-2'>Menu</li>
                        <li className='font-sans font-semibold   text-[16px]  text-[#262626] py-1'>Home</li>
                        <li className='font-sans font-semibold   text-[16px]  text-[#262626] py-1'>Shop</li>
                        <li className='font-sans font-semibold   text-[16px]  text-[#262626] py-1'>About</li>
                        <li className='font-sans font-semibold   text-[16px]  text-[#262626] py-1'>Contact</li>
                        <li className='font-sans font-semibold   text-[16px]  text-[#262626] py-1'>Journal</li>
                    </ul>
                    </div>
                </div>
                <div className="lg:w-[15%]">
                  <div className="">
                  <ul className=''>
                        <li className='font-sans font-bold   text-[18px]  text-[#262626] py-2'>SHOP</li>
                        <li className='font-sans font-semibold   text-[16px]  text-[#262626] py-1'>Category 1</li>
                        <li className='font-sans font-semibold   text-[16px]  text-[#262626] py-1'>Category 2</li>
                        <li className='font-sans font-semibold   text-[16px]  text-[#262626] py-1'>Category 3</li>
                        <li className='font-sans font-semibold   text-[16px]  text-[#262626] py-1'>Category 4</li>
                        <li className='font-sans font-semibold   text-[16px]  text-[#262626] py-1'>Category 5</li>
                    </ul>
                  </div>
                </div>
                <div className="lg:w-[15%]">
                <ul className=''>
                        <li className='font-sans font-bold   text-[18px]  text-[#262626] py-2'>HELP</li>
                        <li className='font-sans font-semibold   text-[16px]  text-[#262626] py-1'>Privacy Policy</li>
                        <li className='font-sans font-semibold   text-[16px]  text-[#262626] py-1'>Terms & Conditions</li>
                        <li className='font-sans font-semibold   text-[16px]  text-[#262626] py-1'>Special E-shop</li>
                        <li className='font-sans font-semibold   text-[16px]  text-[#262626] py-1'>Shipping</li>
                        <li className='font-sans font-semibold   text-[16px]  text-[#262626] py-1'>Secure Payments</li>
                    </ul>
                </div>
                <div className="lg:w-[30%]">
                <ul className=''>
                        <li className='font-sans font-bold   text-[18px]  text-[#262626] py-2'>(052) 611-5711</li>
                        <li className='font-sans font-bold   text-[18px]  text-[#262626] py-1'>company@domain.com</li>
                        <li className='font-sans font-semibold   text-[16px]  text-[#262626] py-1'>575 Crescent Ave. Quakertown, PA 18951</li>
                       
                    </ul>
                </div>
                <div className="lg:w-[25%] w-full lg:mt-0 mt-[30px]">
                    <img src={LogoImg} alt="" />
                </div>
                
               
                    <div className="flex gap-x-4 mt-[30px] text-[28px]">
                        <FaFacebookF/>
                        <FaLinkedinIn />
                        <FaInstagram />

                    </div>
                    <div className="justify-end">
                        <p className='font-sans font-semibold   text-[16px]  text-[#262626] mt-[30px]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                    </div>
                
               
          
        </Flex>
    </Container>
   </footer>
   </>
  )
}

export default Footer
