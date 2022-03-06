import React, { useState } from 'react';

import { Box, Button, MenuItem, Select, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import Editor from '../../components/Editor';
import { appMessages } from '../../constants/appMessage';
import { LaboratoriesService } from '../../services/laboratoriseService';
import { replaceSpaces } from '../../utils/replaceSpaces';
import { Severities } from '../../constants/severities';
import { updateLaboratory } from '../../store/reducers/laboratories';

const classes = {
    root: { flexGrow: 1, padding: '20px' },
    form: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        rowGap: '10px',
    },
    input: {
        padding: '5px',
        borderRadius: '5px',
        border: 'none',
        fontSize: '20px',
    },
};

function EditLaboratory() {
    const subjects = useSelector((state) => state.subjects);
    const selectedSubject = useSelector((state) => state.navigation.subject);
    const laboratory = useSelector((state) => state.navigation.laboratory);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const [name, setName] = useState(laboratory?.name);
    const [subjectId, setSubjectId] = useState(laboratory?.lesson_id);
    const [data, setData] = useState(laboratory?.data || '');

    const handleSubmit = async (e) => {
        e.preventDefault();

        LaboratoriesService.updateLaboratory({ name, data, lessonId: subjectId }, laboratory.id)
            .then(([laboratory]) => {
                dispatch(updateLaboratory(laboratory));
                enqueueSnackbar(`${laboratory.name} was updated!`, Severities.INFO);
                navigate(`/${replaceSpaces(selectedSubject.name)}`);
            })
            .catch(() => enqueueSnackbar(appMessages.generalError, Severities.ERROR));
    };

    return (
        <Box component="section" sx={classes.root}>
            <form style={classes.form}>
                <TextField
                    id="laboratory-name"
                    label="Laboratory name"
                    variant="filled"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    error={!name}
                    helperText={!name ? 'Field is required' : ''}
                    sx={classes.input}
                />
                <Select
                    id="subject_id"
                    label="Subject name"
                    value={subjectId}
                    variant="filled"
                    required
                    onChange={(e) => setSubjectId(e.target.value)}
                >
                    {subjects.map((subject, index) => (
                        <MenuItem value={subject.id} key={index}>
                            {subject.name}
                        </MenuItem>
                    ))}
                </Select>

                <Button variant="contained" disabled={!name} type="submit" onClick={handleSubmit}>
                    Update laboratory
                </Button>
            </form>
            <Editor data={data} handleDataChange={setData} />
        </Box>
    );
}

export default EditLaboratory;
