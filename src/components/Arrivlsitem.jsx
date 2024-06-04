import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";





const Arrivlsitem = ({item}) => {

    

  
  return (
    <>
  
   <div className="lg:w-[96%] w-full sm:w-[49%] md:w-[32%] ">
        <div className="relative group overflow-hidden">
            <img src={item.thumbnail} className="h-[350px]" alt="" />
            <div className="bg-[#fff] absolute duration-300 ease-in-out left-0 bottom-[-150px] h-[150px]  w-full group-hover:bottom-[0] flex items-center justify-end">
                <ul className='pr-5'>
                    <li className='flex items-center justify-end gap-x-4  duration-300 ease-in-out font-sans font-bold   text-[16px]  text-[#262626] hover:text-[#767676]'>Add to Wish List <FaHeart/></li>
                    <li className='flex items-center  justify-end gap-x-4 py-3 duration-300 ease-in-out font-sans font-bold   text-[16px]  text-[#262626] hover:text-[#767676]'>Compear<TfiReload/></li>
                    <Link to={"/Cart"}>
                    
                    <li className='flex items-center  justify-end gap-x-4 duration-300 ease-in-out font-sans font-bold   text-[16px]  text-[#262626] hover:text-[#767676]'>Add to Cart <FaShoppingCart/></li>
                    </Link>
                </ul>
            </div>
        </div>
        <div className="flex justify-between py-[30px]">
            <h2 className='font-sans font-bold   text-[20px]  text-[#262626]'>{item.title}</h2>
            <h3 className='font-sans font-bold   text-[22px]  text-[#262626]'>${item.price}</h3>
        </div>
    </div>
   
    </>
  )
}

export default Arrivlsitem
