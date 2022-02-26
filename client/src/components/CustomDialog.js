import React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function CustomDialog({
    handleClose,
    handleConfirm,
    confirmText,
    cancelText,
    title,
    disableSubmit,
    children,
}) {
    return (
        <Dialog open={true} onClose={handleClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Button variant="contained" color="error" onClick={handleClose}>
                    {cancelText}
                </Button>
                <Button variant="contained" onClick={handleConfirm} disableSubmit={disableSubmit}>
                    {confirmText}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
