import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Editor from '../../components/Editor';
import QuestionsList from './QuestionsList';

function ViewLaboratory() {
    const laboratory = useSelector((state) => state.navigation.laboratory);

    if (!laboratory) return <Navigate to="/" />;
    return (
        <Box component="section" sx={{ flexGrow: 1, padding: '20px' }} className="view-laboratory">
            <Typography variant="h2" sx={{ textAlign: 'center', marginTop: 0 }}>
                {laboratory.name}
            </Typography>

            <Editor data={laboratory?.data} handleDataChange={() => null} readOnly={true} />

            <QuestionsList list={[]} />
        </Box>
    );
}

export default ViewLaboratory;
