import React from 'react';
import { SiTodoist } from "react-icons/si";
import { FaInbox } from "react-icons/fa";
import SidebarLink from './SidebarLink';

const sidebarLinkData = [
    {
        id: 1,
        to: "/inbox",
        text: "Inbox",
        icon: <FaInbox size={25} />,
    }
]

const Sidebar = () => {
    return (
        <div className='flex flex-col px-2 row-span-2 border-r border-gray-200'>
            {/* title */}
            <div className='border-b border-gray-200 py-3 pl-2 gap-4 flex items-center'>
                <SiTodoist className='text-blue-500' size={40} />

                <span className='text-2xl font-semibold'>TodoIt</span>
            </div>

            {/* sidebar link */}
            <div className='mt-1 flex-1'>
                {sidebarLinkData.map(item => (
                    <SidebarLink key={item.id} to={item.to} text={item.text} icon={item.icon} />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
