import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SUBJECTS_URL } from '../../constants/fetch';
import { createSubject } from '../../store/reducers/subjects';
import { useSnackbar } from 'notistack';

function CreateSubject(props) {
    const { closeModal } = props;

    const [nameValue, setNameValue] = useState('');
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = (e) => {
        const createSubjectCall = async () => {
            const response = await fetch(SUBJECTS_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: nameValue }),
            });
            const [subject] = await response.json();
            dispatch(createSubject(subject));
            closeModal();
            enqueueSnackbar(`The subject ${subject.name} was created!`, { variant: 'success' });
        };

        e.preventDefault();
        createSubjectCall();
    };

    return (
        <Dialog open={true} onClose={closeModal}>
            <DialogTitle>Create Subject</DialogTitle>
            <DialogContent>
                <TextField
                    id="subject-name"
                    label="Subject name"
                    variant="filled"
                    required
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
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default CreateSubject;
