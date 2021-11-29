import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { componentSelector } from './componentSelector';
import './ViewLaboratory.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ViewLaboratory() {
    const laboratory = useSelector((state) => state.navigation.laboratory);

    if (!laboratory) return <Navigate to="/" />;
    return (
        <Box component="section" className="page">
            <Typography variant="h2" className="view-page-title">
                {laboratory.name}
            </Typography>

            {laboratory.data.blocks.map((block, index) => componentSelector(block, index))}
        </Box>
    );
}

export default ViewLaboratory;
