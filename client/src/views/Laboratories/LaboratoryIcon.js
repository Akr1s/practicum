import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/system';
import { getUser } from '../../utils/getUser';
import { Link } from 'react-router-dom';
import { userRoles } from '../../constants/userRoles';

const classes = {
    icons: { position: 'absolute', top: '10px', right: '10px' },
    icon: {
        fontSize: '18px',
        '&:hover': {
            transform: 'scale(1.2)',
        },
    },
};

export default function LaboratoryIcon({ onEdit, onDelete, pathname, laboratoryName }) {
    const user = getUser();
    return (
        user.role === userRoles.ROLE_TEACHER && (
            <Box sx={classes.icons}>
                <Link to={`${pathname}/${laboratoryName}/edit`}>
                    <EditIcon sx={{ ...classes.icon, marginRight: '4px' }} onClick={onEdit} />
                </Link>
                <DeleteIcon sx={classes.icon} onClick={onDelete} />
            </Box>
        )
    );
}
