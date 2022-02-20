import React, { useState } from 'react';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

import { SUBJECTS_URL } from '../../constants/fetch';
import { updateSubject } from '../../store/reducers/subjects';

function UpdateSubject(props) {
    const { subject, closeModal } = props;
    const { id, name } = subject;

    const [nameValue, setNameValue] = useState(name);
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = (e) => {
        const updateSubjectCall = async () => {
            const response = await fetch(`${SUBJECTS_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: nameValue }),
            });
            const [subject] = await response.json();
            dispatch(updateSubject(subject));
            closeModal();
            enqueueSnackbar(`The subject ${subject.name} was updated!`, { variant: 'info' });
        };

        e.preventDefault();
        updateSubjectCall();
    };

    return (
        <Dialog open={true} onClose={closeModal}>
            <DialogTitle>Update Subject</DialogTitle>
            <DialogContent>
                <TextField
                    id="subject-name"
                    label="Subject name"
                    variant="filled"
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                    error={!nameValue}
                    helperText={!nameValue ? 'Field is required' : ''}
                />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="error" onClick={closeModal}>
                    Cancel
                </Button>
                <Button variant="contained" disabled={!nameValue} onClick={handleSubmit}>
                    Update
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default UpdateSubject;
