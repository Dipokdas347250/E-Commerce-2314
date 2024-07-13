import React from 'react'
import Container from './Container'
import PhoImg from "../assets/Phone.png"

const Phone = () => {
  return (
    <>
    <section className='lg:py-[130px] py-[50px] px-3'>
    <Container>
        <div className="">
        <img src={PhoImg} alt="" />
        </div>
    </Container>
    </section>
    </>
  )
}

export default Phone
