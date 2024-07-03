import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'

const Checkout = () => {
  return (
    <section className='py-[100px]'>

      <Container>
        <div className=" items-center">
        <h2 className='font-sans font-bold   text-[42px]  text-[#262626] '>Checkout</h2>
        <h3 className='font-sans font-bold   text-[16px]  text-[#262626] '>Home  +  Checkout</h3>
        <p className='font-sans font-medium   text-[16px]  text-[#262626] pt-[150px]'>Have a coupon? Click here to enter your code</p>
        </div>
        <Flex className=" justify-between">
          <div className="w-[48%]">
            <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>First Name</h3>
            <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='First Name...' />
          </div>
          <div className="w-[48%]">
          <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Last Name</h3>
          <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='Last Name...' />
          </div>

        </Flex>
        <div className="">
        <div className="">
        <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Companye Name (optional)</h3>
        <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='Companye Name...' />
        </div>
        <div className="">
        <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Country *</h3>
        <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='Please select...' />
        </div>
        <div className="">
        <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Street Address *</h3>
        <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='House number and street name...' />
        <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='Apartment, suite, unit etc. (optional)...' />
        </div>
        <div className="">
        <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Town/City *</h3>
        <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='Town/City ...' />
        </div>
        <div className="">
        <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>County (optional)</h3>
        <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='County ...' />
        </div>
        <div className="">
        <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Post Code *</h3>
        <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='Post Code  ...' />
        </div>
        <div className="">
        <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Phone *</h3>
        <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='Phone ...' />
        </div>
        <div className="">
        <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Email Address *</h3>
        <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='Email...' />
        </div>
        </div>
        <div className=" relative after:absolute after:contain-[''] after:h-[2px] after:w-[100%] after:bottom-[-50px] after:left-0 after:bg-[#262626]">
          <h2 className='font-sans font-bold   text-[42px]  text-[#262626] pt-[100px] '>Additional Information</h2>
          <h3 className='font-sans font-bold   text-[16px]  text-[#262626] pt-[50px] '>Other Notes (optional)</h3>
          <p className='font-sans font-medium   text-[16px]  text-[#262626] '>Notes about your order, e.g. special notes for delivery.</p>
        </div>
        <div className="">
          <h2 className='font-sans font-bold   text-[42px]  text-[#262626] pt-[130px] '>Your Order</h2>
        </div>
        <div className="">
        <div className="flex lg:w-[50%] w-full  border-2 border-[#222] justify-around  py-[7px] mt-[70px] ">
            <div className="">
            <h3>Product</h3>
            </div>
            <div className="">
              <h6>-</h6>
            </div>
            <div className="">
            <h4>Total</h4>
            </div>
          </div>
          <div className="flex lg:w-[50%] w-full  border-2 border-[#222] justify-around  py-[7px] ">
            <div className="">
            <h3>Product name x 1</h3>
            </div>
            <div className="">
              <h6>-</h6>
            </div>
            <div className="">
            <h4>389.99 $</h4>
            </div>
          </div>
          <div className="flex lg:w-[50%] w-full  border-2 border-[#222] justify-around  py-[7px] ">
            <div className="">
            <h3>Subtotal</h3>
            </div>
            <div className="">
              <h6>-</h6>
            </div>
            <div className="">
            <h4>389.99 $</h4>
            </div>
          </div>
          <div className="flex lg:w-[50%] w-full  border-2 border-[#222] justify-around  py-[7px] ">
            <div className="">
            <h3>total</h3>
            </div>
            <div className="">
              <h6>-</h6>
            </div>
            <div className="">
            <h4>389.99 $</h4>
            </div>
          </div>
        </div>
      </Container>

    </section>
  )
}

export default Checkout