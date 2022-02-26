import React, { useRef, useState } from 'react';

import { Box, Button, MenuItem, Select, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import './EditLaboratory.css';

import ReactEditor from '../../components/ReactEditor';
import { LaboratoriesService } from '../../services/laboratoriseService';
import { updateLaboratory } from '../../store/reducers/laboratories';

function EditLaboratory() {
    const subjects = useSelector((state) => state.subjects);
    const laboratory = useSelector((state) => state.navigation.laboratory);
    const [name, setName] = useState(laboratory?.name);
    const [subjectId, setSubjectId] = useState(laboratory?.lesson_id);
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

        LaboratoriesService.updateLaboratory(
            { name, data: savedData, lessonId: subjectId },
            laboratory.id,
        )
            .then(([laboratory]) => {
                dispatch(updateLaboratory(laboratory));
                enqueueSnackbar(`${laboratory.name} was updated!`, { variant: 'info' });
                navigateToSubject();
            })
            .then(() => enqueueSnackbar('An error has occured, try again', { variant: 'info' }));
    };

    return (
        <Box component="section" className="page update-laboratory-page">
            <form>
                <TextField
                    id="laboratory-name"
                    label="Laboratory name"
                    variant="filled"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    error={!name}
                    helperText={!name ? 'Field is required' : ''}
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
            <ReactEditor editorRef={editorRef} defaultData={laboratory?.data} />
        </Box>
    );
}

export default EditLaboratory;
