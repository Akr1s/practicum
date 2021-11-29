import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react';

function EditorTable({ data }) {
    const { content, withHeadings } = data;
    const mappedRows = content.map((row, index) => {
        if (index === 0 && withHeadings) {
            return row.map((cell, index) => (
                <TableCell key={index} sx={{ textAlign: 'center', border: '1px solid darkgray' }}>
                    <b>{cell}</b>
                </TableCell>
            ));
        } else
            return row.map((cell, index) => (
                <TableCell key={index} sx={{ textAlign: 'center', border: '1px solid darkgray' }}>
                    {cell}
                </TableCell>
            ));
    });
    console.log(mappedRows);
    return (
        <Table
            sx={{ border: '1px solid darkgray', margin: '20px 0px', borderCollapse: 'collapse' }}
        >
            <TableBody>
                {mappedRows.map((row, index) => (
                    <TableRow key={index}>{row}</TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default EditorTable;
