import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Calculator from './Calculator';
import Editor from '../../components/Editor';

function ViewLaboratory() {
    const laboratory = useSelector((state) => state.navigation.laboratory);

    if (!laboratory) return <Navigate to="/" />;
    return (
        <Box component="section" sx={{ flexGrow: 1, padding: '20px' }} className="view-laboratory">
            <Typography
                variant="h2"
                sx={{ textAlign: 'center', marginTop: 0, marginBottom: '20px' }}
            >
                {laboratory.name}
            </Typography>

            <Editor data={laboratory?.data} handleDataChange={() => null} readOnly={true} />
            <Box sx={{ marginBottom: '20px' }} />
            <Calculator />
        </Box>
    );
}

export default ViewLaboratory;
