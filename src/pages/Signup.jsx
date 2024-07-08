import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const auth = getAuth();
    let navigate = useNavigate()

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [pshow, setPshow] = useState(false)

    let handleSubmit = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                toast("Go TO Login")
                setTimeout(() => {
                    navigate("/login")
                    
                }, 2000);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    }


    let handleEmail = (e) => {
        setEmail(e.target.value);

    }


    let handlepassword = (e) => {
        setPassword(e.target.value);
    }
    return (
        <section className=' py-[100px]'>
            <Container>
                <form action="">
                    <div className=" items-center relative after:absolute after:contain-[''] after:h-[2px] after:w-[100%] after:bottom-[-50px] after:left-0 after:bg-[#BCC6CC]">
                        <h2 className='font-sans font-bold   text-[42px]  text-[#262626] '>Sign up</h2>
                        <h3 className='font-sans font-bold   text-[16px]  text-[#262626] '>Home  +  Sign up</h3>
                        <p className='font-sans font-medium   text-[16px]  text-[#262626] pt-[50px] lg:w-[600px]  '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                    </div>
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"

                    />
                    <h2 className='font-sans font-bold   text-[42px]  text-[#262626] mt-[100px]'>Your Personal Details</h2>
                    <div className=" lg:flex lg:justify-between ">


                        <div className="lg:w-[48%] w-full lg:px-0 px-3">
                            <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>First Name</h3>
                            <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='First Name...' />
                        </div>
                        <div className="lg:w-[48%] w-full lg:px-0 px-3">
                            <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Last Name</h3>
                            <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='Last Name...' />
                        </div>



                    </div>


                    <div className=" lg:flex lg:justify-between relative after:absolute after:contain-[''] after:h-[2px] after:w-[100%] after:bottom-[-80px] after:left-0 after:bg-[#BCC6CC] ">


                        <div className="lg:w-[48%] w-full lg:px-0 px-3">
                            <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Email address</h3>
                            <input onChange={handleEmail} className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='Your Email address...' />
                        </div>
                        <div className="lg:w-[48%] w-full lg:px-0 px-3">
                            <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Phone</h3>
                            <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='Your Phone number...' />
                        </div>



                    </div>
                    <div className="">
                        <h2 className='font-sans font-bold   text-[42px]  text-[#262626] mt-[120px]'>New Customer</h2>
                    </div>
                    <div className=" lg:flex lg:justify-between  ">


                        <div className="lg:w-[48%] w-full lg:px-0 px-3">
                            <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Address 1</h3>
                            <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='---' />
                        </div>
                        <div className="lg:w-[48%] w-full lg:px-0 px-3">
                            <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Address 2</h3>
                            <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='---' />
                        </div>



                    </div>


                    <div className=" lg:flex lg:justify-between  ">


                        <div className="lg:w-[48%] w-full lg:px-0 px-3">
                            <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>City</h3>
                            <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='Your City...' />
                        </div>
                        <div className="lg:w-[48%] w-full lg:px-0 px-3">
                            <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Post Code</h3>
                            <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='00000...' />
                        </div>



                    </div>
                    <div className=" lg:flex lg:justify-between relative after:absolute after:contain-[''] after:h-[2px] after:w-[100%] after:bottom-[-80px] after:left-0 after:bg-[#BCC6CC] ">


                        <div className="lg:w-[48%] w-full lg:px-0 px-3">
                            <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Division</h3>
                            <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='Please select' />
                        </div>
                        <div className="lg:w-[48%] w-full lg:px-0 px-3">
                            <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>District</h3>
                            <input className='w-full h-[50px] border-b-2 outline-none' type="text" placeholder='Please select' />
                        </div>



                    </div>

                    <div className="">
                        <h2 className='font-sans font-bold   text-[42px]  text-[#262626] mt-[120px]'>Your Password</h2>
                    </div>
                    <div className=" lg:flex lg:justify-between  ">


                        <div className="lg:w-[48%] w-full lg:px-0 px-3 relative ">
                            <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Password </h3>
                            <input onChange={handlepassword} className='w-full h-[50px] border-b-2 outline-none' type={pshow ? "text" : "password"} placeholder='Password' />
                            <div onClick={() => setPshow(!pshow)} className=" absolute bottom-[10px]  right-0">
                                {pshow == true ? <FaEye /> : <FaEyeSlash />}


                            </div>
                        </div>
                        <div className="lg:w-[48%] w-full lg:px-0 px-3 ">
                            <h3 className='font-sans font-bold   text-[18px]  text-[#262626] pt-[50px] '>Repeat  Password</h3>
                            <input className='w-full h-[50px] border-b-2 outline-none' type="password" placeholder='Password' />
                        </div>



                    </div>

                    <div className="flex mt-[80px] gap-4 lg:px-0 px-3">
                        <input type="checkbox" />
                        <p>I have read and agree to the Privacy Policy</p>
                    </div>
                    <div className="flex gap-4 mt-[20px] lg:px-0 px-3">
                        <h2>Subscribe Newsletter</h2>
                        <input type="radio" name='yes' />
                        <h3>yes</h3>
                        <input type="radio" name='yes' />
                        <h3>no</h3>
                    </div>
                    <div onClick={handleSubmit} className="h-[50px] w-[180px] bg-[#000] my-[100px] items-center mx-[50%] translate-x-[-50%] lg:mx-0 lg:translate-x-0 cursor-pointer">
                        <h5 className='font-sans font-bold   text-[16px]  text-[#fff] text-center leading-[50px]  '>Sign Up</h5>
                    </div>
                </form>
            </Container>
        </section>
    )
}

export default Signup