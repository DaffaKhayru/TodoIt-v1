import React from 'react';
import useAccount from '../store/useAccount';
import { SiTodoist } from "react-icons/si";

const Account = () => {
    const {toggleAccount} = useAccount();

    return (
        <div className='flex justify-center items-center absolute top-0 left-0 h-screen w-full bg-[rgba(0,0,0,0.1)]'>
            <div className='flex flex-col rounded-sm py-2 px-4 bg-white w-[40%]'>
                <h1 className='mb-2 text-xl font-semibold'>Account</h1>
                
                <SiTodoist className='text-blue-500' size={40}/>

                <form className='mt-2 flex flex-col'>
                    <input type="file" className='bg-gray-100 hover:bg-gray-200 duration-200 cursor-pointer p-2' />

                    <label className='mt-2'>Username</label>
                    <input placeholder='youre name' type="text" className='mt-1 py-1 px-4 bg-gray-50 border border-gray-300 rounded-sm focus-within:outline-blue-500'/>
                    
                    <label className='mt-2'>Password</label>
                    <input placeholder="**********" type="password" className='mt-1 py-1 px-4 bg-gray-50 border border-gray-300 rounded-sm focus-within:outline-blue-500'/>

                    <div className='flex mt-4 items-center justify-between'>
                        <input type="submit" value="Change" className='text-white bg-blue-500 hover:bg-blue-600 duration-200 rounded-sm p-2 cursor-pointer' />
                        <button onClick={toggleAccount} className='bg-gray-100 cursor-pointer p-2 rounded-sm hover:bg-gray-200 duration-200'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Account;
