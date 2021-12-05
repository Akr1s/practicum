import React from 'react';
import { useSelector } from 'react-redux';
import LaboratoriesList from '../../components/Laboratories/LaboratoriesList';
import { Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';

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
