import React, { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/Input';
import Typography from '@mui/material/Typography';

import CustomDialog from '../../components/CustomDialog';

export default function Calculator() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newMeasurement, setNewMeasurement] = useState(0);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editRow, setEditRow] = useState(null);
    const [resultStr, setResultStr] = useState('');

    const handleDelete = (row) => {
        const newRows = rows.filter((item) => item.id !== row.id);
        setRows(newRows);
    };

    const [rows, setRows] = useState([]);

    const columns = [
        { id: 'measurement', label: 'Результат вимірювання', minWidth: 100 },
        {
            id: 'delete',
            label: 'Видалити',
            minWidth: 50,
            renderCell: (data) => {
                return <DeleteIcon onClick={() => handleDelete(data)} sx={{ cursor: 'pointer' }} />;
            },
        },
        {
            id: 'edit',
            label: 'Редагувати',
            minWidth: 50,
            renderCell: (data) => {
                return (
                    <EditIcon
                        onClick={() => {
                            setShowEditModal(true);
                            setEditRow(data);
                        }}
                        sx={{ cursor: 'pointer' }}
                    />
                );
            },
        },
    ];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleCalculate = () => {
        const average = rows.reduce((acc, item) => acc + item.measurement, 0) / rows.length;
        const differences = rows
            .map((item) => Math.abs(item.measurement - average))
            .filter(Boolean);
        const averageDifference =
            differences.reduce((acc, item) => acc + item, 0) / differences.length;
        const relatedError = averageDifference / average;
        setResultStr(
            `Абсолютна похибка: ${averageDifference.toFixed(
                2,
            )}; Відносна похибка: ${relatedError.toFixed(2)}%`,
        );
    };

    return (
        <>
            <form>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440, width: '600px' }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.length ? (
                                    rows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => {
                                            return (
                                                <TableRow
                                                    hover
                                                    role="checkbox"
                                                    tabIndex={-1}
                                                    key={row.id}
                                                >
                                                    {columns.map((column) => {
                                                        return (
                                                            <TableCell key={column.id}>
                                                                {column.renderCell
                                                                    ? column.renderCell(row)
                                                                    : row[column.id]}
                                                            </TableCell>
                                                        );
                                                    })}
                                                </TableRow>
                                            );
                                        })
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            Please, add at least one measurement to enable
                                            calculation
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
                <Button
                    sx={{ position: 'absolute', top: '52px', left: '620px', zIndex: 100 }}
                    onClick={() => setShowAddModal(true)}
                    title="Додати вимірювання"
                    variant="contained"
                >
                    <AddIcon />
                </Button>
                <Button
                    sx={{ marginTop: '20px' }}
                    onClick={handleCalculate}
                    variant="contained"
                    disabled={!rows.length}
                >
                    Розрахувати
                </Button>
            </form>
            {resultStr && <Typography sx={{ marginTop: '20px' }}>{resultStr}</Typography>}

            {showAddModal && (
                <CustomDialog
                    handleClose={() => setShowAddModal(false)}
                    handleConfirm={() => {
                        setRows((oldRows) => [
                            ...oldRows,
                            {
                                id: Math.floor(Math.random() * 100),
                                measurement: Number(newMeasurement),
                            },
                        ]);
                        setNewMeasurement(0);
                    }}
                    confirmText="Додати"
                    cancelText="Відмінити"
                    title="Додати нове вимірювання"
                    disableSubmit={!newMeasurement}
                >
                    <TextField
                        id="subject-name"
                        label="Вимірювання"
                        variant="filled"
                        value={newMeasurement}
                        onChange={(e) => setNewMeasurement(e.target.value)}
                        error={!newMeasurement}
                        helperText={!newMeasurement ? 'Field is required' : ''}
                        type="number"
                    />
                </CustomDialog>
            )}

            {showEditModal && (
                <CustomDialog
                    handleClose={() => setShowEditModal(false)}
                    handleConfirm={() => {
                        setRows(
                            rows.map((row) => {
                                if (row.id === editRow.id) {
                                    return { ...editRow };
                                }
                                return row;
                            }),
                        );
                        setEditRow(null);
                        setShowEditModal(false);
                    }}
                    confirmText="Обновити"
                    cancelText="Відмінити"
                    title="Обновити вимірювання"
                    disableSubmit={!editRow.measurement}
                >
                    <TextField
                        id="subject-name"
                        label="Вимірювання"
                        variant="filled"
                        value={editRow.measurement}
                        onChange={(e) =>
                            setEditRow({ id: editRow.id, measurement: e.target.value })
                        }
                        error={!newMeasurement}
                        helperText={!newMeasurement ? 'Field is required' : ''}
                        type="number"
                    />
                </CustomDialog>
            )}
        </>
    );
}
