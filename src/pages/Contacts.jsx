import React from 'react'
import Container from '../components/Container'
import Map from "../assets/Map.png"

const Contacts = () => {
    return (
        <>
            <section className='py-[124px]'>
                <Container>
                    <div className="">
                        <div className="">
                            <h2 className='font-sans font-bold   text-[42px]  text-[#262626] '>Contacts</h2>
                        </div>
                        <div className="py-[100px]">
                            <div className="lg:w-[50%] w-full">
                                <h3 className='font-sans font-bold   text-[42px]  text-[#262626] '>Fill up a Form</h3>
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
                                <div className="h-[50px] w-[180px] bg-[#000] my-[100px] items-center">
                                    <h5 className='font-sans font-bold   text-[16px]  text-[#fff] text-center leading-[50px]'>Post</h5>
                                </div>
                               
                            </div>
                            <div className="pt-[50px]">
                                    <img src={Map} alt="" />
                                </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Contacts
