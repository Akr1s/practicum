import React, { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { IoMenu } from 'react-icons/io5';
import { useNavigate } from 'react-router';
import { useSnackbar } from 'notistack';

import Sidebar from '../Sidebar';
import { appMessages } from '../../constants/appMessage';
import { AuthService } from '../../services/authService';
import { getUser } from '../../utils/getUser';
import { Severities } from '../../constants/severities';

const classes = {
    root: {
        backgroundColor: 'var(--white-color, "white")',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '25px',
    },
    icon: { fontSize: '36px', cursor: 'pointer' },
    avatar: { width: 36, height: 36, cursor: 'pointer' },
};

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

function Header({ openSidebar }) {
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const user = getUser();

    if (!user) return null;

    const logout = async () => {
        AuthService.logout()
            .then(() => {
                localStorage.removeItem('user');
                navigate('/signin');
            })
            .catch(() => enqueueSnackbar(appMessages.generalError, Severities.ERROR));
    };

    return (
        <Box component="header" sx={classes.root}>
            <IoMenu onClick={openSidebar} style={classes.icon} />
            <Avatar {...stringAvatar(user.username)} style={classes.avatar} onClick={logout} />
        </Box>
    );
}

export default Header;
