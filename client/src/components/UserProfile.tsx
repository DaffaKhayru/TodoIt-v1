import React from 'react';
import { FiLogOut } from "react-icons/fi";
import useAccount from '../store/useAccount';

const UserProfile = () => {
    const {toggleAccount} = useAccount();

    return (
        <div onClick={toggleAccount} className='bg-white border border-blue-500 absolute top-14 right-5'>
            {/* user profile */}
            <div className='flex flex-col justify-center py-2 px-4 cursor-pointer hover:bg-gray-100 duration-200 border-b border-gray-300'>
                <h1 className=''>daffakhayru</h1>
                <p>daffakhayru@gmail.com</p>
            </div>

            {/* logout button */}
            <div className='flex gap-5 cursor-pointer hover:bg-gray-100 duration-200 py-2 px-4'>
                <FiLogOut size={22}/>

                <span>Logout</span>
            </div>
        </div>
    );
}

export default UserProfile;
