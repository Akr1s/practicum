import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import { LabsService } from '../../services/labsService';
import { Link } from 'react-router-dom';

const classes = {
    root: {
        flexGrow: 1,
        padding: '20px',
        fontSize: '20px',
        display: 'grid',
        gap: '10px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    },
    laboratory: {
        minHeight: '150px',
        backgroundColor: 'var(--white-color, white)',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        '&:hover': {
            backgroundColor: 'var(--light-gray-color, gray)',
        },
    },
    link: { display: 'block', position: 'relative' },
};

function Home() {
    const [laboratories, setLaboratories] = useState([]);

    useEffect(() => {
        LabsService.getLaboratories().then((data) => setLaboratories(data));
    });

    return (
        <Box component="section" sx={classes.root}>
            {laboratories.map((item) => (
                <Link to={`/${item.id}`} style={classes.link} key={item.id}>
                    <Card sx={classes.laboratory}>{item.name}</Card>
                </Link>
            ))}
        </Box>
    );
}

export default Home;
