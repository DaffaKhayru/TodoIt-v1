import React from 'react';
import { NavLink } from 'react-router';

interface SidebarLinkProps  {
    to: string
    text: string
    icon: React.ReactNode
}

const SidebarLink: React.FC<SidebarLinkProps> = ({to,text,icon}) => {
    return (
        <NavLink to={to}
            className={({isActive}) => 
                `px-4 py-2 flex items-center rounded-sm gap-5  ${isActive ? "bg-blue-100" : ""}`
            }    
        >
            {icon}
            <p>{text}</p>
        </NavLink>
    );
}

export default SidebarLink;
