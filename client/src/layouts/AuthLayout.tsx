import React from 'react';
import { Outlet } from 'react-router';
import Greeting from '../components/Greeting';

const AuthLayout = () => {
    return (
        <div className='h-screen grid grid-cols-2'>
            <Greeting />
            <Outlet />
        </div>
    );
}

export default AuthLayout;
