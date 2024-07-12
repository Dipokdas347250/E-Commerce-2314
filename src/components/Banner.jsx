import React from 'react'
import BanImg from "../assets/Banner.png"

import Slider from "react-slick";
import Container from './Container';
import Flex from './Flex';
import { TbTruckDelivery } from "react-icons/tb";
import { IoReload } from "react-icons/io5";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows:false,
        speed: 500,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
          <div
            style={{
              borderRadius: "10px",
              padding: "10px",
              position:"absolute",
              left:"50px",
              top:"50%",
              transform:"translateY(-50%)"
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div className='ami'
            style={{
              width: "30px",
              color: "transparent",
              padding:"7px 0",
              borderRight: "3px #fff solid"
            }}
          >
            0{i + 1}
          </div>
        )
      };

  return (
    <>
    <div className="lg:pt-[100px]">
    <Slider {...settings}> 
    
    <div className="">
      <img src={BanImg} alt="banner" />
    </div>
    <div className="">
      <img src={BanImg} alt="banner" />
    </div>
    <div className="">
      <img src={BanImg} alt="banner" />
    </div>
    <div className="">
      <img src={BanImg} alt="banner" />
    </div>
    
  
  </Slider>
    </div>
    

    <div className=" border-b-2 border-[#262626] bottom-0 left-0 ">
    <Container>
        <Flex className="justify-between items-center  py-4 px-3">
            <div className="">
            <div className=" flex items-center gap-x-3">
                <h3 className='text-[32px]  text-[#262626]  font-sans font-bold'>2</h3>
                <h2 className=' hidden lg:block  font-sans font-normal   text-[16px]  text-[#262626]'>Two years warranty</h2>
            </div>
            </div>
            <div className="">
                <div className="flex items-center gap-x-3 ">
                <TbTruckDelivery className='lg:text-[22px]  text-[32px]  text-[#262626]'/>
                <h2 className=' hidden lg:block font-sans font-normal   text-[16px]  text-[#262626]'>Free shipping</h2>
                </div>
            </div>
            <div className="">
                <div className="flex items-center gap-x-3">
                <IoReload className='lg:text-[22px]  text-[32px]  text-[#262626]'/>
                <h2 className=' hidden lg:block font-sans font-normal   text-[16px]  text-[#262626]'>Return policy in 30 days</h2>
                </div>
            </div>
        </Flex>
    </Container>
    </div>
    </>
  )
}

export default Banner
