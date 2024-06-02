import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";

const Faccordain = () => {
    let [show , setShow] = useState(false)
    let [catshow , catSetShow] = useState(false)

  return (
    <div>
      <div onClick={()=>setShow(!show )} className=" flex justify-between cursor-pointer pt-[50px] items-center  relative   after:absolute after:content-[''] after:h-[1px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 ">
              <h2 className='font-sans font-bold   text-[22px]  text-[#262626] '>FEATURES  & DETAILS</h2>
              {show == true ? <GiTireIronCross/> : <FaPlus />}
              
              
              
            </div>
            <div className="">
                {show && (
            <p className=' pt-[50px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ullam adipisci aperiam voluptates officia eveniet dignissimos, explicabo, voluptate nemo omnis quas? Totam fugit explicabo omnis veritatis nulla praesentium rerum! Consequatur!</p>
            )}
            
            </div>
            <div onClick={()=>catSetShow(!catshow )} className=" flex justify-between cursor-pointer pt-[50px] items-center  relative   after:absolute after:content-[''] after:h-[1px] after:w-full after:bg-[#D8D8D8] after:bottom-[-20px] after:left-0 ">
              <h2 className='font-sans font-bold   text-[22px]  text-[#262626] '>SHIPPING & RETURNS</h2>
              {catshow == true ? <GiTireIronCross/> : <FaPlus />}
              
            </div>
            <div className="">
                {catshow && (
            <p className=' pt-[50px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ullam adipisci aperiam voluptates officia eveniet dignissimos, explicabo, voluptate nemo omnis quas? Totam fugit explicabo omnis veritatis nulla praesentium rerum! Consequatur!</p>
            )}
            
            </div>
    </div>
  )
}

export default Faccordain
