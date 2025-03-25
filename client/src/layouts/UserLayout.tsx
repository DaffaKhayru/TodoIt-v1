import React from 'react';
import {AnimatePresence} from 'framer-motion';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import About from '../components/About';
import { Outlet } from 'react-router';
import useSidebar from '../store/useSidebar';
import AddTodo from '../components/AddTodo';
import useAddTodo from '../store/useAddTodo';
import useAbout from '../store/useAbout';

const UserLayout = () => {
    const {isSidebarWide} = useSidebar();
    const {isAddTodoVisible} = useAddTodo();
    const {isAboutVisible} = useAbout();

    return (
        <div className={`${isSidebarWide ? "grid-cols-[16rem_1fr]" : "grid-cols-[0_1fr]"} relative duration-200 h-screen grid  grid-rows-[3.2rem_1fr]`}>
            <Sidebar />
            <Navbar />
            <Outlet />

            <AnimatePresence>
                {isAddTodoVisible && <AddTodo />}
            </AnimatePresence>
            
            {isAboutVisible && 
                <div className='fixed top-0 left-0 bg-[rgba(0,0,0,0.1)] z-10 h-screen w-full'></div>
            }
            
            <About />

        </div>
    );
}

export default UserLayout;
