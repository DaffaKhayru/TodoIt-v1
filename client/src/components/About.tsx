import React from 'react';
import useAbout from '../store/useAbout';
import { IoIosClose } from "react-icons/io";

const About = () => {
    const {isAboutVisible,toggleAbout} = useAbout();

    return (
        <div className={`${isAboutVisible ? "translate-x-0" : "translate-x-full"} flex flex-col py-2 px-4 transition-transform fixed w-[19rem] right-0 z-20 duration-200 bg-white h-screen`}>
            <div className='border-b border-gray-300 px-2 py-1 flex justify-between items-center'>
                <h1 className='font-semibold text-2xl'>About</h1>

                <div onClick={toggleAbout} className='cursor-pointer hover:bg-gray-100 duration-200 p-2 rounded-sm'>
                    <IoIosClose size={25}/>
                </div>
            </div>

            <div className='flex-1 pt-2 pl-2'>
                <p className='text-lg'>TodoIt version 1.0</p>
            </div>
        </div>
    );
}

export default About;
