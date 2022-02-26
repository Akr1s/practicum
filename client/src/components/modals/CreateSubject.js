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
import { useSnackbar } from 'notistack';

import { appMessages } from '../../constants/appMessage';
import { createSubject } from '../../store/reducers/subjects';
import { Severities } from '../../constants/severities';
import { SubjectsService } from '../../services/subjectsService';

function CreateSubject(props) {
    const { closeModal } = props;

    const [nameValue, setNameValue] = useState('');
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = (e) => {
        const createSubjectCall = async () => {
            SubjectsService.createSubject(nameValue)
                .then(([subject]) => {
                    dispatch(createSubject(subject));
                    closeModal();
                    enqueueSnackbar(`The subject ${subject.name} was created!`, Severities.SUCCESS);
                })
                .catch(() => enqueueSnackbar(appMessages.generalError, Severities.ERROR));
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
