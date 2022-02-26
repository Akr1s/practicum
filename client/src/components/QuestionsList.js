import { Box } from '@mui/system';
import React, { useState } from 'react';
import { IoRemove, IoAdd } from 'react-icons/io5';

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
                    {isQuestionsOpen ? <IoRemove /> : <IoAdd />}
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
