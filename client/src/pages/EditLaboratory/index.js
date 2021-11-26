import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactEditor from '../../components/ReactEditor';
import { LABORATORIES_URL } from '../../constants/fetch';
import { updateLaboratory } from '../../store/reducers/laboratories';
import { useNavigate, useLocation } from 'react-router-dom';
import './EditLaboratory.css';
import Box from '@mui/system/Box';
import { Button, MenuItem, Select, TextField } from '@mui/material';

function EditLaboratory() {
    const subjects = useSelector((state) => state.subjects);
    const laboratory = useSelector((state) => state.navigation.laboratory);
    const [name, setName] = useState(laboratory?.name);
    const [subjectId, setSubjectId] = useState(laboratory?.lesson_id);
    const editorRef = useRef();
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const navigateToSubject = () => {
        const subjectName = location.pathname.split('/')[1];
        navigate(`/${subjectName}`);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const savedData = await editorRef.current.save();

        const updateSubjectCall = async () => {
            const response = await fetch(`${LABORATORIES_URL}/${laboratory.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, data: savedData, lessonId: subjectId }),
            });
            const subjects = await response.json();
            dispatch(updateLaboratory(subjects[0]));
        };

        updateSubjectCall();
        navigateToSubject();
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
                    {subjects.map((subject) => (
                        <MenuItem value={subject.id}>{subject.name}</MenuItem>
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
