import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import useSidebar from '../store/useSidebar';

const UserLayout = () => {
    const {isSidebarWide} = useSidebar();

    return (
        <div className={`${isSidebarWide ? "grid-cols-[16rem_1fr]" : "grid-cols-[0_1fr]"} duration-200 h-screen grid  grid-rows-[3.2rem_1fr]`}>
            <Sidebar />
            <Navbar />
            <Outlet />
        </div>
    );
}

export default UserLayout;
