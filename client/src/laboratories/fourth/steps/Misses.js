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
    { t: 1, y: 12, s: 0.143, l: 0.048, r: 'false' },
    { t: 2, y: 11.5, s: 0.57, l: 0.028, r: 'true' },
    { t: 3, y: 12.2, s: 0.3, l: 0.033, r: 'false' },
    { t: 4, y: 11.8, s: 0.314, l: 0.05, r: 'false' },
    { t: 5, y: 11.9, s: 0.08, l: 0.021, r: 'false' },
    { t: 6, y: 12.1, s: 0.257, l: 0.042, r: 'false' },
    { t: 7, y: 11.7, s: 0.2, l: 0.046, r: 'false' },
    { t: 8, y: 11.8, s: 0.186, l: 0.05, r: 'false' },
];

export default function Misses() {
    return (
        <Box>
            <Typography sx={classes.text}>
                Було введено набір з 8 значень. Результати обчислень наведено в таблиці:
            </Typography>
            <Table sx={{ width: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>t</TableCell>
                        <TableCell>x</TableCell>
                        <TableCell>
                            <TeX math="\mid \bar x - x_i \mid" />
                        </TableCell>
                        <TableCell>
                            <TeX math="\sigma" />
                        </TableCell>
                        <TableCell>
                            <TeX math="\mid \bar x - x_i \mid > 3\sigma" />
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.t}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{row.t}</TableCell>
                            <TableCell>{row.y}</TableCell>
                            <TableCell>{row.s}</TableCell>
                            <TableCell>{row.l}</TableCell>
                            <TableCell>{row.r}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Typography sx={{ ...classes.text, fontWeight: 700 }}>
                Промахами є такі значення: 11.5
            </Typography>
            <Typography sx={classes.text}>
                Ці значення будуть відкинуті в подальших розрахунках
            </Typography>
        </Box>
    );
}
