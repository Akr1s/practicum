import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './Header.css';
import { IoMenu } from 'react-icons/io5';
import Avatar from '@mui/material/Avatar';

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            <header>
                <IoMenu
                    className="menu-icon"
                    onClick={() => setIsSidebarOpen(true)}
                    sx={{ fontSize: '36px' }}
                />
                <Avatar {...stringAvatar('Kent Dodds')} sx={{ width: 36, height: 36 }} />
            </header>
            <Sidebar open={isSidebarOpen} onClose={closeSidebar} />
        </>
    );
}

export default Header;
