import React from 'react';
import { Link } from 'react-router';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTodoist } from "react-icons/si";

const Login = () => {
    return (
        <div className='w-[48%]'>
            {/* icon title */}
            <div className='mb-2 mt-4 flex justify-center'>
                <SiTodoist className='text-blue-500' size={50} />
            </div>

            {/* title */}
            <h1 className='mb-2 text-center text-2xl font-semibold'>Login</h1>

            {/* greeter */}
            <p className='text-center'>Hello, everyone</p>

            {/* signup form */}
            <form className='flex flex-col'>
                <label className='mb-1'>Email</label>
                <input type="email" placeholder='name@gmail.com' className='mb-2 px-4 py-1 bg-gray-50 border-2 rounded-sm focus-within:outline-blue-500 border-gray-300' />

                <label className='mb-1'>Password</label>
                <input type="password" placeholder='*************' className='mb-2 px-4 py-1 bg-gray-50 border-2 rounded-sm focus-within:outline-blue-500 border-gray-300' />

                <div className='flex justify-between items-center mt-2'>
                    <input type="submit" value='Signup' className='cursor-pointer text-white bg-blue-500 p-2 rounded-sm hover:bg-blue-600 duration-200' />

                    <p>Don't have account? 
                        <Link to='/signup' className='hover:text-blue-500 duration-200'> Signup</Link>
                    </p>
                </div>
            </form>

            {/* or */}
            <div className='mt-4 flex items-center justify-center'>
                <div className='flex-1 border-t-2 border-gray-200'></div>
                <span className='px-4'>or</span>
                <div className='flex-1 border-t-2 border-gray-200'></div>
            </div>

            {/* google signup */}
            <button className='mt-4 duration-200 hover:bg-gray-100 flex justify-center gap-5 bg-white border border-gray-300 w-full py-2 items-center cursor-pointer rounded-sm'>
                <FaGoogle size={20} />
                <span>continue with google</span>
            </button>

            {/* github signup */}
            <button className='mt-4 duration-200 hover:bg-gray-100 flex justify-center gap-5 bg-white border border-gray-300 w-full py-2 items-center cursor-pointer rounded-sm'>
                <FaGithub size={20} />
                <span>continue with github</span>
            </button>
        </div>
    );
}

export default Login;
