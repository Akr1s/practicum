import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactEditor from '../../components/ReactEditor';
import { LABORATORIES_URL } from '../../constants/fetch';
import { createLaboratory } from '../../store/reducers/laboratories';
import { useNavigate, useLocation } from 'react-router-dom';
import './CreateLaboratory.css';
import Box from '@mui/system/Box';

function CreateLaboratory() {
    const subjects = useSelector((state) => state.subjects);
    const [name, setName] = useState('');
    const [subjectId, setSubjectId] = useState(subjects[0]?.id);
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

        const createSubjectCall = async () => {
            const response = await fetch(LABORATORIES_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, data: savedData, lessonId: subjectId }),
            });
            const subjects = await response.json();
            dispatch(createLaboratory(subjects[0]));
        };

        createSubjectCall();
        navigateToSubject();
    };

    return (
        <Box component="section" className="page create-laboratory-page">
            <form>
                <label htmlFor="laboratory-name">Laboratory name</label>
                <input
                    type="text"
                    id="laboratory-name"
                    className="subject-name-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="subject_id">Subject name</label>
                <select
                    name="subject_id"
                    id="subject_id"
                    value={subjectId}
                    onChange={(e) => setSubjectId(e.target.value)}
                >
                    {subjects.map((subject) => (
                        <option value={subject.id}>{subject.name}</option>
                    ))}
                </select>
                <button className="button" type="submit" onClick={handleSubmit}>
                    Create laboratory
                </button>
            </form>
            <ReactEditor editorRef={editorRef} defaultData={[]} />
        </Box>
    );
}

export default CreateLaboratory;
