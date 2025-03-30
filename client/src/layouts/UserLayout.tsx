import React from 'react';
import {AnimatePresence} from 'framer-motion';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import About from '../components/About';
import { Outlet } from 'react-router';
import useSidebar from '../store/useSidebar';
import AddTodo from '../components/AddTodo';
import useAddTodo from '../store/useAddTodo';
import Setting from '../components/Setting';
import useAccount from '../store/useAccount';
import Account from '../components/Account';

const UserLayout = () => {
    const {isSidebarWide} = useSidebar();
    const {isAddTodoVisible} = useAddTodo();
    const {isAccountVisible} = useAccount();

    return (
        <div className={`${isSidebarWide ? "grid-cols-[16rem_1fr]" : "grid-cols-[0_1fr]"} relative duration-200 h-screen grid  grid-rows-[3.2rem_1fr]`}>
            <Sidebar />
            <Navbar />
            <Outlet />

            {isAddTodoVisible && <AddTodo />}
            {isAccountVisible && <Account />}

            <About />
            <Setting />
        </div>
    );
}

export default UserLayout;
