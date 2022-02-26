import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

import CustomDialog from '../components/CustomDialog';
import { appMessages } from '../constants/appMessage';
import { createSubject } from '../store/reducers/subjects';
import { Severities } from '../constants/severities';
import { SubjectsService } from '../services/subjectsService';

export default function CreateSubject(props) {
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
        <CustomDialog
            handleClose={closeModal}
            handleConfirm={handleSubmit}
            confirmText="Create"
            cancelText="Cancel"
            title="Create Subject"
            disableSubmit={!nameValue}
        >
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
        </CustomDialog>
    );
}
