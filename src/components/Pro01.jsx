import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import pro01 from "../assets/pro01.png"
import pro02 from "../assets/pro02.png"
import pro03 from "../assets/pro03.png"
import pro04 from "../assets/pro04.png"


const Pro01 = () => {
  return (
   <>
   <section className='lg:py-[130px] py-[20px] px-3'>
    <Container>
        <Flex className="justify-between flex-wrap">
        <div className="lg:w-[24%] w-full sm:w-[49%] md:w-[32%]">
        <div className="relative group overflow-hidden">
            <img src={pro01} className="" alt="" />
            <div className="absolute top-[20px] left-[20px] h-[40px] w-[120px] bg-black items-center">
                <h5 className='font-sans font-bold   text-[16px] text-[#fff] text-center leading-[40px]'>New</h5>
            </div>
            <div className="bg-[#fff] absolute duration-300 ease-in-out left-0 bottom-[-150px] h-[150px]  w-full group-hover:bottom-[0] flex items-center justify-end">
                <ul className='pr-5'>
                    <li className='flex items-center justify-end gap-x-4  duration-300 ease-in-out font-sans font-bold   text-[16px]  text-[#262626] hover:text-[#767676]'>Add to Wish List <FaHeart/></li>
                    <li className='flex items-center  justify-end gap-x-4 py-3 duration-300 ease-in-out font-sans font-bold   text-[16px]  text-[#262626] hover:text-[#767676]'>Compear<TfiReload/></li>
                    <li className='flex items-center  justify-end gap-x-4 duration-300 ease-in-out font-sans font-bold   text-[16px]  text-[#262626] hover:text-[#767676]'>Add to Cart <FaShoppingCart/></li>
                </ul>
            </div>
        </div>
        <div className="flex justify-between py-[30px] px-4">
            <h2 className='font-sans font-bold   text-[20px]  text-[#262626]'>Basic Crew Neck Tee</h2>
            <h3 className='font-sans font-bold   text-[22px]  text-[#262626]'>$44.00</h3>
        </div>
    </div>
        <div className="lg:w-[24%] w-full sm:w-[49%] md:w-[32%]">
        <div className="relative group overflow-hidden">
            <img src={pro02} className="" alt="" />
            <div className="absolute top-[20px] left-[20px] h-[40px] w-[120px] bg-black items-center">
                <h5 className='font-sans font-bold   text-[16px] text-[#fff] text-center leading-[40px]'>New</h5>
            </div>
            <div className="bg-[#fff] absolute duration-300 ease-in-out left-0 bottom-[-150px] h-[150px]  w-full group-hover:bottom-[0] flex items-center justify-end">
                <ul className='pr-5'>
                    <li className='flex items-center justify-end gap-x-4  duration-300 ease-in-out font-sans font-bold   text-[16px]  text-[#262626] hover:text-[#767676]'>Add to Wish List <FaHeart/></li>
                    <li className='flex items-center  justify-end gap-x-4 py-3 duration-300 ease-in-out font-sans font-bold   text-[16px]  text-[#262626] hover:text-[#767676]'>Compear<TfiReload/></li>
                    <li className='flex items-center  justify-end gap-x-4 duration-300 ease-in-out font-sans font-bold   text-[16px]  text-[#262626] hover:text-[#767676]'>Add to Cart <FaShoppingCart/></li>
                </ul>
            </div>
        </div>
        <div className="flex justify-between py-[30px] px-4">
            <h2 className='font-sans font-bold   text-[20px]  text-[#262626]'>Basic Crew Neck Tee</h2>
            <h3 className='font-sans font-bold   text-[22px]  text-[#262626]'>$44.00</h3>
        </div>
    </div>
        <div className="lg:w-[24%] w-full sm:w-[49%] md:w-[32%]">
        <div className="relative group overflow-hidden">
            <img src={pro03} className="" alt="" />
            <div className="absolute top-[20px] left-[20px] h-[40px] w-[120px] bg-black items-center">
                <h5 className='font-sans font-bold   text-[16px] text-[#fff] text-center leading-[40px]'>New</h5>
            </div>
            <div className="bg-[#fff] absolute duration-300 ease-in-out left-0 bottom-[-150px] h-[150px]  w-full group-hover:bottom-[0] flex items-center justify-end">
                <ul className='pr-5'>
                    <li className='flex items-center justify-end gap-x-4  duration-300 ease-in-out font-sans font-bold   text-[16px]  text-[#262626] hover:text-[#767676]'>Add to Wish List <FaHeart/></li>
                    <li className='flex items-center  justify-end gap-x-4 py-3 duration-300 ease-in-out font-sans font-bold   text-[16px]  text-[#262626] hover:text-[#767676]'>Compear<TfiReload/></li>
                    <li className='flex items-center  justify-end gap-x-4 duration-300 ease-in-out font-sans font-bold   text-[16px]  text-[#262626] hover:text-[#767676]'>Add to Cart <FaShoppingCart/></li>
                </ul>
            </div>
        </div>
        <div className="flex justify-between py-[30px] px-4">
            <h2 className='font-sans font-bold   text-[20px]  text-[#262626]'>Basic Crew Neck Tee</h2>
            <h3 className='font-sans font-bold   text-[22px]  text-[#262626]'>$44.00</h3>
        </div>
    </div>
        <div className="lg:w-[24%] w-full sm:w-[49%] md:w-[32%]">
        <div className="relative group overflow-hidden">
            <img src={pro04} className="" alt="" />
            <div className="absolute top-[20px] left-[20px] h-[40px] w-[120px] bg-black items-center">
                <h5 className='font-sans font-bold   text-[16px] text-[#fff] text-center leading-[40px]'>New</h5>
            </div>
            <div className="bg-[#fff] absolute duration-300 ease-in-out left-0 bottom-[-150px] h-[150px]  w-full group-hover:bottom-[0] flex items-center justify-end">
                <ul className='pr-5'>
                    <li className='flex items-center justify-end gap-x-4  duration-300 ease-in-out font-sans font-bold   text-[16px]  text-[#262626] hover:text-[#767676]'>Add to Wish List <FaHeart/></li>
                    <li className='flex items-center  justify-end gap-x-4 py-3 duration-300 ease-in-out font-sans font-bold   text-[16px]  text-[#262626] hover:text-[#767676]'>Compear<TfiReload/></li>
                    <li className='flex items-center  justify-end gap-x-4 duration-300 ease-in-out font-sans font-bold   text-[16px]  text-[#262626] hover:text-[#767676]'>Add to Cart <FaShoppingCart/></li>
                </ul>
            </div>
        </div>
        <div className="flex justify-between py-[30px] px-4">
            <h2 className='font-sans font-bold   text-[20px]  text-[#262626]'>Basic Crew Neck Tee</h2>
            <h3 className='font-sans font-bold   text-[22px]  text-[#262626]'>$44.00</h3>
        </div>
    </div>
        </Flex>
    </Container>
   </section>
   </>
  )
}

export default Pro01
