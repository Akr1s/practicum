import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactEditor from '../../components/ReactEditor';
import { LABORATORIES_URL } from '../../constants/fetch';
import { updateLaboratory } from '../../store/reducers/laboratories';
import { useNavigate, useLocation } from 'react-router-dom';
import './EditLaboratory.css';

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
        const savedData = await editorRef.current.instance.save();

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
        <section className="page update-laboratory-page">
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
                    Update laboratory
                </button>
            </form>
            <ReactEditor editorRef={editorRef} defaultData={laboratory?.data} />
        </section>
    );
}

export default EditLaboratory;
