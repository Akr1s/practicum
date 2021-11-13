import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './Header.css';
import { IoMenu, IoPerson } from 'react-icons/io5';

function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            <header>
                <IoMenu className="menu-icon" onClick={() => setIsSidebarOpen(true)} />
                <IoPerson className="avatar-icon" />
            </header>
            <Sidebar open={isSidebarOpen} onClose={closeSidebar} />
        </>
    );
}

export default Header;
