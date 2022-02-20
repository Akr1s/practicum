import React from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { IoSchool } from 'react-icons/io5';

import SubjectsList from '../components/SubjectsList';

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
};

function Sidebar(props) {
    const { open, onClose } = props;

    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <Box sx={classes.root}>
                <IoSchool style={{ fontSize: '32px' }} />
                <Divider
                    sx={{ borderTop: '1px solid #e3e3e3', margin: '12px 0 12px 0', width: '100%' }}
                />
                <SubjectsList />
            </Box>
        </Drawer>
    );
}

export default Sidebar;
