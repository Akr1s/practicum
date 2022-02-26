import React from 'react';

import Box from '@mui/material/Box';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LaboratoriesList from './LaboratoriesList';

function Laborataries() {
    const subject = useSelector((state) => state.navigation.subject);
    if (!subject) return <Navigate to="/" />;
    return (
        <Box component="section" className="page">
            <LaboratoriesList id={subject.id} name={subject.name} />
        </Box>
    );
}

export default Laborataries;
