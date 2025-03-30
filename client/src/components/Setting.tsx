import React from 'react';
import { IoIosClose } from "react-icons/io";
import useSetting from '../store/useSetting';

const Setting = () => {
    const {isSettingVisible,toggleSetting} = useSetting();

    return (
        <>
            {isSettingVisible && 
                <div className='fixed top-0 left-0 bg-[rgba(0,0,0,0.1)] z-10 h-screen w-full'></div>
            }
            
            <div className={`${isSettingVisible ? "translate-x-0" : "translate-x-full"} flex flex-col py-2 px-4 transition-transform fixed w-[19rem] right-0 z-20 duration-200 bg-white h-screen`}>
                <div className='border-b border-gray-300 px-2 py-1 flex justify-between items-center'>
                    <h1 className='font-semibold text-2xl'>Setting</h1>

                    <div onClick={toggleSetting} className='cursor-pointer hover:bg-gray-100 duration-200 p-2 rounded-sm'>
                        <IoIosClose size={25}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Setting;
