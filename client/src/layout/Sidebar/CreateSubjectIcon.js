import React from 'react';

import { Card } from '@mui/material';
import { IoAdd } from 'react-icons/io5';

const classes = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px 10px',
        cursor: 'pointer',
        fontSize: '30px',
        '&:hover': { borderRadius: '10px', backgroundColor: 'var(--gray-color, "gray")' },
    },
    icon: { cursor: 'pointer', '&:hover': { transform: 'scale(1.2)' } },
};

export default function CreateSubjectIcon(props) {
    const { handleCreate } = props;
    return (
        <Card sx={classes.root} onClick={handleCreate}>
            <IoAdd style={classes.icon} />
        </Card>
    );
}
