import React, { useState, useEffect, useContext } from 'react'
import Container from './Container'
import Arrivlsitem from './Arrivlsitem'
import { apiData } from './ContextApi'
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='h-[60px] w-[60px] bg-[#979797] rounded-full text-center leading-[60px] absolute top-[50%] right-0 translate-y-[-150%] cursor-pointer duration-300 ease-in-out hover:bg-[#000]  '>< FaArrowRight className='inline-block text-[24px] text-white' /></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='h-[60px] w-[60px] bg-[#979797] rounded-full text-center leading-[60px] absolute top-[50%] left-0 translate-y-[-150%] cursor-pointer duration-300 ease-in-out hover:bg-[#000] z-50  '>< FaArrowLeft className='inline-block text-[24px] text-white' /></div>
  );
}


const Newarrivals = () => {


  let data = useContext(apiData)
  var settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      },

    ]
  };


  return (
    <section className=''>
      <Container>
        <h2 className=' font-sans font-bold   text-[32px]  text-[#262626]'>New Arrivals</h2>

        <Slider {...settings} >

          {data.map((item) => (
            <Link to="/Product">
              <Arrivlsitem item={item} />
            </Link>

          ))}
        </Slider>


      </Container>
    </section>
  )
}

export default Newarrivals
