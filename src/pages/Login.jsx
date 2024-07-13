import React, { useState } from 'react'
import Container from '../components/Container'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {


    let [psshow , setPsshow] = useState(false);
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    const auth = getAuth();
    
    let navigate = useNavigate();
     

    let handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    let handlePassword = (e)=>{
        setPassword(e.target.value)
    }

    let handleSubmit= (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          console.log("user" ,user);
        })
        .then(()=>{
            toast("My Account")
            setTimeout(() => {
                
                navigate("/account")
            }, 2000);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    }

    return (
        <section className='lg:py-[150px] px-3'>
            <Container>
                <div className=" items-center ">
                    <h2 className='font-sans font-bold   text-[42px]  text-[#262626] '>Login</h2>
                    <h3 className='font-sans font-bold   text-[16px]  text-[#262626] '>Home  +  Login</h3>
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

                </div>
                <div className="lg:py-[150px] py-[50px]  bg-[#98AFC7] mt-[50px] items-center">
                    <div className="my-[30px] mx-[50%] py-[50px] translate-x-[-50%] bg-[#fff] rounded-xl lg:w-[500px] w-[350px] px-5 ">
                        <form action="">
                            <h2 className='font-sans font-bold   text-[22px]  text-[#262626] '>Sign in to your account</h2>
                            <div className=" mt-[30px]">
                                <h2  className=' font-sans font-medium   text-[16px]  text-[#262626] '>Your Email</h2>
                                <input onChange={handleEmail} className='h-[50px] border-2 border-[#262626]  w-[100%] px-3 rounded-lg mt-[10px] outline-none' type="email " placeholder='Your Email...' />
                            </div>
                            <div className=" pt-7 relative">
                                <h2 className=' font-sans font-medium   text-[16px]  text-[#262626] '>Password</h2>
                                <input onChange={handlePassword} className='  h-[50px] border-2 border-[#262626]  w-[100%] px-3 rounded-lg mt-[10px] outline-none' type={psshow ? "text" : "password"} placeholder='Password...' />
                                <div onClick={()=>setPsshow(!psshow)} className=" absolute bottom-[15px] right-3">
                                    {psshow == true ? <FaEye/> : <FaEyeSlash/>}
                                
                                
                                </div>
                                
                            </div>
                            

                            <div className=" flex justify-between items-center mt-[30px]">
                                <div className="flex gap-4 lg:px-0 px-3 ">
                                    <input type="checkbox" />
                                    <p className=' font-sans font-medium   text-[16px]  text-[#262626] '>Remember me</p>
                                </div>
                                <div className=" text-center">
                                    <h2 className=' font-sans font-medium   text-[16px]  text-[#262626] '>Forgot password?</h2>
                                </div>
                            </div>
                            <div onClick={handleSubmit} className="h-[50px] w-[100%] bg-[#000] mt-[30px]  items-center   cursor-pointer rounded-xl">
                                <h5 className='font-sans font-bold   text-[16px]  text-[#fff] text-center leading-[50px]  '>Sign In</h5>
                            </div>
                            <div className="mt-[30px]">
                                <h2 className=' font-sans font-medium   text-[16px]  text-[#262626] '>Don’t have an account yet? <span className=' font-bold'>Sign up</span> </h2>
                            </div>
                        </form>

                    </div>

                </div>
                
            </Container>

        </section>
    )
}

export default Login