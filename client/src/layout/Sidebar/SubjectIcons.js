import React from 'react';

import Box from '@mui/material/Box';
import { IoTrash, IoPencil } from 'react-icons/io5';

import { getUser } from '../../utils/getUser';
import { userRoles } from '../../constants/userRoles';

const classes = {
    icon: {
        cursor: 'pointer',
        '&:hover': {
            transform: 'scale(1.2)',
        },
        '&::not(:last-of-type)': {
            marginRight: '8px',
        },
    },
};

export default function SubjectIcons({ onEdit, onDelete }) {
    const user = getUser();

    return (
        user.role === userRoles.ROLE_TEACHER && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IoPencil style={classes.icon} onClick={onEdit} />
                <IoTrash style={classes.icon} onClick={onDelete} />
            </Box>
        )
    );
}
