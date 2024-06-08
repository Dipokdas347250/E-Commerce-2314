
import Container from "../components/Container"
import Flex from "../components/Flex"
import { GiTireIronCross } from "react-icons/gi";
import logo01 from "../assets/Logo.png"
import { useDispatch, useSelector } from 'react-redux'
import { productIncrement,productDecrement, removeProduct } from '../components/slice/productSlice';


const Cart = () => {
  let dispatch = useDispatch()
  let data = useSelector((state)=>state .product.cartItem)
  let handleIncrement = ((index)=>{
    dispatch(productIncrement(index))
  })
  let handleDecrement = ((index)=>{
    dispatch(productDecrement(index))

  })
   
 let handleRemove =((index)=>{
   dispatch(removeProduct(index))
 })

  const {totalprice, totalquantity} = data.reduce((acc , item)=>{
    acc.totalprice += item.price * item.qun
    acc.totalquantity += item.qun

    return acc


  },{totalprice:0, totalquantity:0})
    console.log(totalprice);
    console.log(totalquantity);


  return (
    <section className='my-20'>
       <Container>
        <h2 className='font-sans font-bold   text-[42px]  text-[#262626] '>Cart</h2>
        <p className='font-sans font-bold   text-[16px]  text-[#262626] '>Home &#62; Cart</p>
        <Flex className="justify-between bg-[#F5F5F5] h-[60px] items-center ">
         <div className="w-[40%]">
          <h2 className='font-sans font-semibold   text-[16px]  text-[#262626] text-center '>Product</h2>
         </div>
         <div className="w-[15%]">
          <h2  className='font-sans font-semibold   text-[16px]  text-[#262626] text-center '>Price</h2>
         </div>
         <div className="w-[30%]">
          <h2  className='font-sans font-semibold   text-[16px]  text-[#262626] text-center '>Quntite</h2>
         </div>
         <div className="w-[15%]">
          <h2  className='font-sans font-semibold   text-[16px]  text-[#262626] text-center '>Total</h2>
         </div>
        </Flex>
        {data.map((item ,index)=>(
        <Flex className="my-14 items-center">
          
          <div className="w-[40%]">
            <div className="flex justify-around items-center">
              <div className="cursor-pointer" onClick={()=>handleRemove(index)} >
                 <GiTireIronCross/> 
              
              </div>
             
              <div className="">
                <img className='w-[100px] h-[100px]' src={item.thumbnail} alt="" />
              </div>
              <div className="">
                <h5 className='font-sans font-semibold   text-[16px]  text-[#262626]  '> {item.title}</h5>
              </div>
            </div>
          </div>
          <div className="w-[15%]">
            <h4 className='font-sans font-semibold   text-[16px]  text-[#262626] text-center '>${item.price}</h4>
          </div>
          <div className="w-[30%]">
          <div className=" flex w-[120px] h-[40px]  justify-around items-center  mx-auto ">
                <div onClick={()=> handleDecrement(index)} className="cursor-pointer font-sans font-semibold   text-[20px]  text-[#262626] ">-</div>
                <div className="font-sans font-bold   text-[22px]  text-[#262626]">{item.qun}</div>
                <div onClick={()=> handleIncrement(index)} className="cursor-pointer font-sans font-semibold   text-[20px]  text-[#262626]">+</div>
              </div>
          </div>
          <div className="w-[15%]">
          <h4 className='font-sans font-semibold   text-[16px]  text-[#262626] text-center '>${item.price * item.qun}</h4>
          </div>

        </Flex>

        ))}

        <div className="flex justify-end">
         <div className="">
         <h2 className='font-sans font-bold   text-[24px]  text-[#262626] text-end '>Cart totals</h2>
          <div className="flex w-[400px] border-2 border-[#222] justify-around">
            <div className="">
              <h3>Subtotal</h3>
            </div>
            <div className="">
              <h4>{totalprice}$</h4>
            </div>
          </div>
          <div className="flex  w-[400px] border-2 border-[#222] justify-around my-3">
            <div className="">
            <h3>Quantity</h3>
            </div>
            <div className="">
            <h4>{totalquantity}</h4>
            </div>
          </div>
          <div className="flex  w-[400px] border-2 border-[#222] justify-around">
            <div className="">
            <h3>total</h3>
            </div>
            <div className="">
            <h4>{totalprice}$</h4>
            </div>
          </div>
          <div className="mt-2">
            <p  className=' h-[50px] w-[180px] border-2 border-[#262626] bg-[#000] font-sans font-bold   text-[16px]  text-[#fff] text-center duration-300 ease-in-out leading-[50px] hover:bg-[#fff] hover:text-[#262626] cursor-pointer'>Proceed to Checkout</p>
          </div>
         
         </div>
        </div>
       </Container>
       
    </section>
  )
}

export default Cart
