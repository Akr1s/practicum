import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const classes = {
    text: { margin: '10px 0' },
};

const rows = [
    { t: 1, y: 12, s: 0.143, l: 11.93, r: 'false' },
    { t: 2, y: 11.5, s: 0.57, l: 11.93, r: 'true' },
    { t: 3, y: 12.2, s: 0.3, l: 11.93, r: 'false' },
    { t: 4, y: 11.8, s: 0.314, l: 11.93, r: 'false' },
    { t: 5, y: 11.9, s: 0.08, l: 11.93, r: 'false' },
    { t: 6, y: 12.1, s: 0.257, l: 11.93, r: 'false' },
    { t: 7, y: 11.7, s: 0.2, l: 11.93, r: 'false' },
    { t: 8, y: 11.8, s: 0.186, l: 11.93, r: 'false' },
];

export default function Results() {
    return (
        <Box>
            <Typography sx={classes.text}>
                Відносна похибка:{' '}
                <TeX math="\delta_x = \frac {\Delta_{заг}} {\bar x} * 100% =  \frac {0.252} {11.93} = 2%" />
            </Typography>
            <Typography sx={classes.text}>
                Шукану величину можна представити в наступному вигляді:{' '}
                <TeX math="11.93 \pm 0.252" />
            </Typography>
            <Typography sx={classes.text}>Зведена таблиця результатів:</Typography>
            <Typography sx={{ ...classes.text, color: 'red' }}>Formula</Typography>

            <Table sx={{ width: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>t</TableCell>
                        <TableCell>x</TableCell>
                        <TableCell>
                            <TeX math="\mid \bar x - x_i \mid" />
                        </TableCell>
                        <TableCell>
                            <TeX math="\bar x" />
                        </TableCell>
                        <TableCell>
                            <TeX math="\sigma" />
                        </TableCell>
                        <TableCell>
                            <TeX math="\Delta_{заг}" />
                        </TableCell>
                        <TableCell>
                            <TeX math="\delta_{x}" />
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>{1}</TableCell>
                        <TableCell>{12}</TableCell>
                        <TableCell>{0.143}</TableCell>
                        <TableCell colspan={2}>{0.143}</TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>{1}</TableCell>
                        <TableCell>{12}</TableCell>
                        <TableCell>{0.143}</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    );
}
