import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

import CustomDialog from '../components/CustomDialog';
import { appMessages } from '../constants/appMessage';
import { Severities } from '../constants/severities';
import { SubjectsService } from '../services/subjectsService';
import { updateSubject } from '../store/reducers/subjects';

function UpdateSubject(props) {
    const { subject, closeModal } = props;
    const { id, name } = subject;
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();

    const [nameValue, setNameValue] = useState(name);

    const handleSubmit = (e) => {
        SubjectsService.updateSubject(nameValue, id)
            .then(([subject]) => {
                dispatch(updateSubject(subject));
                closeModal();
                enqueueSnackbar(`The subject ${subject.name} was updated!`, Severities.INFO);
            })
            .catch(() => enqueueSnackbar(appMessages.generalError, Severities.ERROR));
    };

    return (
        <CustomDialog
            handleClose={closeModal}
            handleConfirm={handleSubmit}
            confirmText="Update"
            cancelText="Cancel"
            title="Update Subject"
            disableSubmit={!nameValue}
        >
            <TextField
                id="subject-name"
                label="Subject name"
                variant="filled"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                error={!nameValue}
                helperText={!nameValue ? 'Field is required' : ''}
            />
        </CustomDialog>
    );
}

export default UpdateSubject;
