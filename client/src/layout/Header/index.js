import React from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router';
import { useSnackbar } from 'notistack';

import { appMessages } from '../../constants/appMessage';
import { AuthService } from '../../services/authService';
import { getUser } from '../../utils/getUser';
import { Severities } from '../../constants/severities';
import { stringAvatar } from '../../utils/colorfullAvatar';

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
            <MenuIcon onClick={openSidebar} sx={classes.icon} />
            <Avatar {...stringAvatar(user.username)} style={classes.avatar} onClick={logout} />
        </Box>
    );
}

export default Header;
