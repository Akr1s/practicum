import React from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { IoSchool } from 'react-icons/io5';

import SubjectsList from '../components/SubjectsList';

function Sidebar(props) {
    const { open, onClose } = props;

    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <Box className="sidebar-content">
                <IoSchool className={'school-icon'} />
                <Divider
                    sx={{ borderTop: '1px solid #e3e3e3', margin: '12px 0 12px 0', width: '100%' }}
                />
                <SubjectsList />
            </Box>
        </Drawer>
    );
}

export default Sidebar;
