import React from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import SchoolIcon from '@mui/icons-material/School';

import SubjectsList from './SubjectsList';

const classes = {
    root: {
        width: '280px',
        backgroundColor: 'var(--white-color, "white")',
        height: '100%',
        padding: '20px 0px',
        boxShadow: '0 0 16px rgb(0 0 0 / 28%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    divider: { borderTop: '1px solid #e3e3e3', margin: '12px 0 12px 0', width: '100%' },
};

function Sidebar(props) {
    const { open, onClose } = props;

    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <Box sx={classes.root}>
                <SchoolIcon sx={{ fontSize: '32px' }} />
                <Divider sx={classes.divider} />
                <SubjectsList />
            </Box>
        </Drawer>
    );
}

export default Sidebar;
