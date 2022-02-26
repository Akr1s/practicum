import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import QuestionsList from './QuestionsList';
import { componentSelector } from './componentSelector';

function ViewLaboratory() {
    const laboratory = useSelector((state) => state.navigation.laboratory);

    if (!laboratory) return <Navigate to="/" />;
    return (
        <Box component="section" sx={{ flexGrow: 1, padding: '20px' }}>
            <Typography variant="h2" sx={{ textAlign: 'center', marginTop: 0 }}>
                {laboratory.name}
            </Typography>

            {laboratory.data.blocks.map((block, index) => componentSelector(block, index))}

            <QuestionsList list={[]} />
        </Box>
    );
}

export default ViewLaboratory;
