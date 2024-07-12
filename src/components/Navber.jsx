import React, { useContext, useEffect, useRef, useState } from 'react';
import Container from './Container';
import Flex from './Flex';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaSearch, FaUser } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import { GiTireIronCross } from 'react-icons/gi';
import Cartimg from '../assets/Cart.png';
import { useDispatch, useSelector } from 'react-redux';
import { apiData } from './ContextApi';
import { Link, useNavigate } from 'react-router-dom';
import { removeProduct } from './slice/productSlice';

const Navber = () => {
    let info = useContext(apiData);
    let data = useSelector((state) => state.product.cartItem);
    let [category, setCategory] = useState([]);

    let [cartShow, setCartShow] = useState(false);
    let [userShow, setUserShow] = useState(false);
    let [myShow, setMyShow] = useState(false);
    let [searchInput, setSearchInput] = useState('');
    let [searchFilter, setSearchFilter] = useState([]);
    let [selectedIndex, setSelectedIndex] = useState(-1); // Track selected index
    let navigate = useNavigate();

    let cartref = useRef();
    let usertref = useRef();
    let mytref = useRef();

    

   
  
    const { totalprice, totalquantity } = data.reduce(
        (acc, item) => {
            acc.totalprice += item.price * item.qun;
            acc.totalquantity += item.qun;
            return acc;
        },
        { totalprice: 0, totalquantity: 0 }
    );

    let handleInput = (e) => {
        setSearchInput(e.target.value);
        if (e.target.value === '') {
            setSearchFilter([]);
        } else {
            let searchResults = info.filter((item) =>
                item.title.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setSearchFilter(searchResults);
            setSelectedIndex(-1); // Reset selected index when input changes
        }
    };

    let handleSingleSearch = (id) => {
        navigate(`/product/${id}`);
        setSearchFilter([]);
        setSearchInput('');
    };

    let handlekey = (e) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault();
            const maxIndex = searchFilter.length - 1;
            if (e.key === 'ArrowUp') {
                setSelectedIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
            } else if (e.key === 'ArrowDown') {
                setSelectedIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
            }
        } else if (e.key === 'Enter' && selectedIndex !== -1) {
            handleSingleSearch(searchFilter[selectedIndex].id);
        }
    };

    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (cartref.current.contains(e.target) === true) {
                setCartShow(!cartShow);
            } else {
                setCartShow(false);
            }
            if (usertref.current.contains(e.target) === true) {
                setUserShow(!userShow);
            } else {
                setUserShow(false);
            }
            if (mytref.current.contains(e.target) === true) {
                setMyShow(!myShow);
            } else {
                setMyShow(false);
            }
        });
    }, [cartShow, userShow, myShow]);

    useEffect(() => {
        setCategory([...new Set(data.map((item) => item.category))]);
    }, [data]);

    return (
        <>
            <div className="bg-[#D8D8D8] h-[100px] px-3  lg:fixed w-full z-50  ">
                <Container>
                    <Flex className=" h-[100px]  items-center  ">
                        <div className=" lg:w-[35%] w-full relative">
                            <div className="">
                                <div ref={cartref} className="flex lg:items-center items-center  gap-x-3">
                                    <div className="cursor-pointer">
                                        <FaBarsStaggered />
                                    </div>
                                    <h2 className="font-sans hidden lg:block cursor-pointer font-bold py-[20px] lg:py-0 text-[16px]  text-[#767676] hover:lg:text-[#262626] hover:text-[#62d7f5b4] hover:duration-700 ease-in-out">
                                        Shop by Category
                                    </h2>
                                </div>
                            </div>
                            {cartShow && (
                                <div className=" absolute z-50 top-[58px] left-0 bg-[#262626] w-[300px] rounded-lg">
                                    <ul>
                                        <li className="text-[rgba(255,255,255,0.9)] font-sans text-[16px] cursor-pointer py-2 pl-3 duration-500 ease-in-out hover:pl-6 ">
                                        Accesories
                                        </li>
                                        <li className="text-[rgba(255,255,255,0.9)] font-sans text-[16px] cursor-pointer py-2 pl-3 duration-500 ease-in-out hover:pl-6 ">
                                        Furniture
                                        </li>
                                        <li className="text-[rgba(255,255,255,0.9)] font-sans text-[16px] cursor-pointer py-2 pl-3 duration-500 ease-in-out hover:pl-6 ">
                                        Electronics
                                        </li>
                                        <li className="text-[rgba(255,255,255,0.9)] font-sans text-[16px] cursor-pointer py-2 pl-3 duration-500 ease-in-out hover:pl-6 ">
                                        Clothes
                                        </li>
                                        <li className="text-[rgba(255,255,255,0.9)] font-sans text-[16px] cursor-pointer py-2 pl-3 duration-500 ease-in-out hover:pl-6 ">
                                        Bags
                                        </li>
                                        <li className="text-[rgba(255,255,255,0.9)] font-sans text-[16px] cursor-pointer py-2 pl-3 duration-500 ease-in-out hover:pl-6 ">
                                        Home appliances
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="lg:w-[40%] w-full">
                            <div className="">
                                <div className="relative">
                                    <input
                                        value={searchInput}
                                        onKeyUp={handlekey}
                                        onChange={handleInput}
                                        placeholder="search..."
                                        type="search"
                                        className="lg:w-full  lg:h-[50px]  h-[50px] top-[50px] border-2  outline-none px-3 rounded-lg"
                                    />
                                    <div className="absolute top-[50%] translate-y-[-50%] right-[20px]">
                                        <FaSearch />
                                    </div>
                                    {searchFilter.length > 0 && (
                                        <div className=" cursor-pointer lg:w-[500px] w-full lg:h-[300px] h-[100px] overflow-y-scroll bg-[#F5F5F3] absolute z-50 top-[58px] left-0">
                                            {searchFilter.map((item, index) => (
                                                <div key={item.id} className={`py-3 ${index === selectedIndex ? 'bg-gray-200' : ''}`}>
                                                    <div
                                                        onClick={() => handleSingleSearch(item.id)}
                                                        className="flex justify-around items-center"
                                                    >
                                                        <div className="">
                                                            <img
                                                                className="lg:w-[100px] w-[50px] lg:h-[100px] h-[50px]"
                                                                src={item.thumbnail}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="font-sans  font-bold   lg:text-[16px] text-[12px]  text-[#262626]">
                                                            <h2>{item.title}</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[25%] w-full relative">
                            <div className="flex justify-end  gap-x-3">
                                <div ref={mytref} className="flex cursor-pointer">
                                    <FaUser />
                                    <MdOutlineKeyboardArrowDown />
                                </div>
                                {myShow &&
                                    <div className="absolute z-50 top-[58px] right-[40px]">
                                        <div className="">
                                            <a className='w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px] font-sans font-normal   text-[16px] bg-[#000]  text-[#fff] duration-500 ease-in-out hover:bg-[#fff] hover:text-[#262626]' href="#">My Account</a>
                                        </div>
                                        <div className="">
                                            <a className='w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px] font-sans font-normal   text-[16px]  text-[#262626] duration-500 ease-in-out bg-white hover:bg-[#000] hover:text-[#fff]' href="#">
                                                Log In
                                            </a>
                                        </div>
                                        <div className="">
                                            <a className='w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px] font-sans font-normal   text-[16px]  text-[#262626] duration-500 ease-in-out bg-white hover:bg-[#000] hover:text-[#fff]' ><Link to="/Signup">Sign up</Link></a>
                                        </div>
                                    </div>
                                }
                                <div ref={usertref} className="cursor-pointer">
                                    <div className="relayive text-center" >
                                        <FaShoppingCart />
                                        {data.length > 0 ? <div className="absolute h-[20px] w-[20px] border-2 border-[#262626] rounded-full leading-[20px] text-center top-[-20px]  right-[-10px]">

                                            {data.length}  </div> : ""}


                                    </div>
                                </div>
                            </div>



                            {userShow &&
                                <div className="">
                                    <div className="w-[360px] bg-[#F5F5F3] absolute z-50 top-[58px] right-0 overflow-y-scroll lg:h-[300px] h-[100px]">
                                        {data.map((item)=>(

                                        <div className="py-3 px-3  ">
                                            <div className="flex justify-around items-center ">
                                                <div className="">
                                                    <img className=' w-[100px] h-[100px]' src={item.thumbnail} alt="" />
                                                </div>
                                                <div className="font-sans  font-bold   text-[16px]  text-[#262626]">
                                                    <h2>{item.title}</h2>
                                                    <h3>{item.price}$</h3>
                                                </div>
                                                <div className="">
                                                    <GiTireIronCross />
                                                </div>
                                            </div>

                                        </div>
                                        ))}
                                         
                                        <h2 className='pl-5 font-sans font-medium   text-[16px]  text-[#262626]'>Subtotal: <span className='font-sans  font-bold   text-[16px]  text-[#262626]'>{totalprice}$</span></h2>
                                        <div className="flex justify-around pt-2">
                                            <div className="">
                                            <Link to="/cart">
                                                <a className='w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px] font-sans font-normal   text-[16px] bg-[#000]  text-[#fff] duration-500 ease-in-out hover:bg-[#fff] hover:text-[#262626]' href="#"> View Cart</a>
                                                    </Link>
                                            </div>
                                            <div className="">
                                            <Link to="/Checkout">
                                                <a className='w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px] font-sans font-normal   text-[16px]  text-[#262626] duration-500 ease-in-out hover:bg-[#000] hover:text-[#fff]' href="#">Checkout</a>
                                                    </Link>
                                            </div>
                                        </div>
                                    
                                    </div>
                                   
                                </div>


                            }


                        </div>

                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default Navber
