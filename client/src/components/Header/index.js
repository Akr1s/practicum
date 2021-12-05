import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './Header.css';
import { IoMenu } from 'react-icons/io5';
import Avatar from '@mui/material/Avatar';
import { LOGOUT_URL } from '../../constants/fetch';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router';
import { getUser } from '../../utils/getUser';

function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
    }

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
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    const user = getUser();

    if (!user) return null;

    const logout = async () => {
        try {
            const response = await fetch(LOGOUT_URL, {
                method: 'POST',
            });
            const responseData = await response.json();
            if (responseData.status !== 'ok') throw Error('Something went wrong');
            localStorage.removeItem('user');
            navigate('/signin');
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    };

    return (
        <>
            <header>
                <IoMenu
                    className="menu-icon"
                    onClick={() => setIsSidebarOpen(true)}
                    sx={{ fontSize: '36px' }}
                />
                <Avatar
                    {...stringAvatar(user.username)}
                    sx={{ width: 36, height: 36, cursor: 'pointer' }}
                    onClick={logout}
                />
            </header>
            <Sidebar open={isSidebarOpen} onClose={closeSidebar} />
        </>
    );
}

export default Header;
