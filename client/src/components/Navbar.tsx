import React from 'react';
import {useLocation} from 'react-router';
import { BsLayoutSidebar } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { MdQuestionMark } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { SiTodoist } from "react-icons/si";
import { IoMdArrowDropdown } from "react-icons/io";
import useSidebar from '../store/useSidebar';

const Navbar = () => {
    const {toggleSidebar} = useSidebar();

    const location = useLocation();

    let pageTitle;

    switch(location.pathname) {
        case "/inbox":
            pageTitle = "Inbox";
        break;
    }

    return (
        <div className='flex items-center justify-between bg-gray-100'>
            {/* title section */}
            <div className='flex items-center gap-5'>
                {/* toggle sidebar */}
                <div onClick={toggleSidebar} className='p-4 hover:bg-gray-200 duration-200 cursor-pointer'>
                    <BsLayoutSidebar size={23}/>
                </div>

                <h1 className='text-2xl'>{pageTitle}</h1>
            </div>

            {/* searchbar */}
            <div className='relative'>
                <IoIosSearch size={20} className='absolute top-1.5 left-1.5' />
                <input placeholder='search' type="text" className='py-1 pl-8 bg-white rounded-full focus-within:outline-blue-500' />
            </div>

            {/* options */}
            <div className='flex items-center'>
                {/* add button */}
                <div className='p-4 hover:bg-gray-200 duration-200 cursor-pointer'>
                    <IoAdd size={27} />
                </div>

                {/* add button */}
                <div className='p-4 hover:bg-gray-200 duration-200 cursor-pointer'>
                    <MdQuestionMark size={26} />
                </div>

                {/* add button */}
                <div className='p-4 hover:bg-gray-200 duration-200 cursor-pointer'>
                    <IoSettingsOutline size={26} />
                </div>

                {/* add button */}
                <div className='flex items-center gap-3 p-4 hover:bg-gray-200 duration-200 cursor-pointer'>
                    <SiTodoist className='text-blue-500' size={25} />
                    <IoMdArrowDropdown className='' size={24} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
