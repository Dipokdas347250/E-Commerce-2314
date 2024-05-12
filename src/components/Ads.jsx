import React from 'react'
import AdImg1 from "../assets/Ad1.png"
import AdImg2 from "../assets/Ad2.png"
import AdImg3 from "../assets/Ad3.png"
import Container from './Container'
import Flex from './Flex'

const Ads = () => {
  return (
    <>
    <section className=' lg:py-[174px] py-[20px]'>
       <Container>
        <Flex className="justify-between">
        <div className=" w-[49%]">
            <img src={AdImg1} alt="" />
        </div>
        <div className=" w-[49%]">
            <div className="">
                <img src={AdImg2} alt="" />
            </div>
            <div className="">
                <div className="lg:mt-[30px] sm:mt-[17px] mt-[8px] xl:mt-[40px]  ">
                    <img src={AdImg3} alt="" />
                </div>
            </div>
        </div>
        </Flex>
       </Container>
        

    </section>
    </>
  )
}

export default Ads
