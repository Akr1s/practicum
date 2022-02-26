import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import { Card } from '@mui/material';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const classes = {
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        width: '120px',
        height: '150px',
        backgroundColor: 'var(--white-color, white)',
        borderRadius: '4px',
        '&:hover': {
            backgroundColor: 'var(--light-gray-color, gray)',
        },
    },
};

export default function CreateLaboratory() {
    const { pathname } = useLocation();
    return (
        <Link to={`${pathname}/create`}>
            <Card sx={classes.card} title="Create">
                <AddIcon sx={{ fontSize: '50px' }} />
            </Card>
        </Link>
    );
}
