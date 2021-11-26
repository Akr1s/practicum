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
import { SUBJECTS_URL } from '../../../constants/fetch';
import { createSubject } from '../../../store/reducers/subjects';

function CreateSubject(props) {
    const { closeModal } = props;

    const [nameValue, setNameValue] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        const createSubjectCall = async () => {
            const response = await fetch(SUBJECTS_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: nameValue }),
            });
            const subjects = await response.json();
            dispatch(createSubject(subjects[0]));
            closeModal();
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
                    Update
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default CreateSubject;
