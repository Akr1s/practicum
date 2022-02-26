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
        <Dialog open={true} onClose={handleClose} PaperProps={{ sx: { minWidth: '500px' } }}>
            <DialogTitle sx={{ textAlign: 'center' }}>{title}</DialogTitle>
            {!!children && (
                <DialogContent
                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    {children}
                </DialogContent>
            )}
            <DialogActions>
                <Button variant="contained" color="error" onClick={handleClose}>
                    {cancelText}
                </Button>
                <Button variant="contained" onClick={handleConfirm} disabled={disableSubmit}>
                    {confirmText}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
