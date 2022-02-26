import React from 'react';

import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';

function ConfirmModal(props) {
    const { handleClose, handleConfirm, confirmText, cancelText, title } = props;

    return (
        <Dialog open={true} onClose={handleClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogActions>
                <Button variant="contained" color="error" onClick={handleClose}>
                    {cancelText}
                </Button>
                <Button variant="contained" onClick={handleConfirm}>
                    {confirmText}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmModal;
