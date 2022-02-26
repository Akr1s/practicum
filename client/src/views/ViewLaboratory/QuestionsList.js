import React, { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/system';

export default function QuestionsList(list) {
    const [isQuestionsOpen, setIsQuestionsOpen] = useState(false);
    return (
        <Box
            component="section"
            sx={{ backgroundColor: 'var(--white-color, "white")', padding: '20px' }}
        >
            <Box onClick={() => setIsQuestionsOpen(!isQuestionsOpen)} sx={{ position: 'relative' }}>
                Контрольні питання{' '}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '-5px',
                        right: 0,
                        fontSize: '30px',
                    }}
                >
                    {isQuestionsOpen ? <RemoveIcon /> : <AddIcon />}
                </Box>{' '}
            </Box>
            {isQuestionsOpen && (
                <>
                    <hr />
                    <Box sx={{ marginTop: '10px' }}>
                        Дана лабораторна робота не має контрольних питань!
                    </Box>
                </>
            )}
        </Box>
    );
}
