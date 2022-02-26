import React, { useRef, useState } from 'react';

import { Button, MenuItem, Select, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import Box from '@mui/system/Box';
import ReactEditor from '../../components/ReactEditor';
import { appMessages } from '../../constants/appMessage';
import { createLaboratory } from '../../store/reducers/laboratories';
import { LaboratoriesService } from '../../services/laboratoriseService';
import { Severities } from '../../constants/severities';

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
    input: { padding: '5px', borderRadius: '5px', border: 'none', fontSize: '20px' },
};

function CreateLaboratory() {
    const subjects = useSelector((state) => state.subjects);
    const [name, setName] = useState('');
    const [subjectId, setSubjectId] = useState(subjects[0]?.id);
    const editorRef = useRef();
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const navigateToSubject = () => {
        const subjectName = location.pathname.split('/')[1];
        navigate(`/${subjectName}`);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const savedData = await editorRef.current.save();

        LaboratoriesService.createLaboratory({ name, data: savedData, lessonId: subjectId })
            .then(([laboratory]) => {
                dispatch(createLaboratory(laboratory));
                navigateToSubject();
                enqueueSnackbar(`${laboratory.name} was created!`, Severities.SUCCESS);
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

                <Button variant="contained" type="submit" disabled={!name} onClick={handleSubmit}>
                    Create laboratory
                </Button>
            </form>
            <ReactEditor editorRef={editorRef} defaultData={[]} />
        </Box>
    );
}

export default CreateLaboratory;
