import React from 'react';
import { BsLayoutSidebar } from "react-icons/bs";
import useSidebar from '../store/useSidebar';

const Navbar = () => {
    const {toggleSidebar} = useSidebar();

    return (
        <div className='flex items-center bg-gray-100'>
            {/* toggle sidebar */}
            <div onClick={toggleSidebar} className='p-4 hover:bg-gray-200 duration-200 cursor-pointer'>
                <BsLayoutSidebar size={23}/>
            </div>
        </div>
    );
}

export default Navbar;
