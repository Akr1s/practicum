import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

const classes = {
    text: { margin: '10px 0' },
};

export default function Average() {
    return (
        <Box>
            <Typography sx={classes.text}>
                Розрахунок середнього значення проведемо за формулою:{' '}
                <TeX math=" \bar x  = \frac {\sum x_i}  n" />
            </Typography>
            <Typography sx={{ ...classes.text }}>
                <TeX math=" \bar x  = \frac {\sum x_i}  n = \frac {83.5} 7 = 11.93" />
            </Typography>
            <Typography sx={classes.text}>
                Обчислення середньоквадратичного відхилення:{' '}
                <TeX math="\sigma = \sqrt{\frac {\sum {(\bar x -  x_i)}^2}  n}" />
            </Typography>
            <Typography sx={{ ...classes.text }}>
                <TeX math="\sigma = \sqrt{\frac {\sum {(\bar x -  x_i)}^2}  n} = \sqrt{\frac {0.1943} 7} = \sqrt {0.028} = {0.167}" />
            </Typography>
        </Box>
    );
}
