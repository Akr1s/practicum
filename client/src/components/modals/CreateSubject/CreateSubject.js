import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SUBJECTS_URL } from '../../../constants/fetch';
import { createSubject } from '../../../store/reducers/subjects';
import './CreateSubject.css';

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
        <div
            className="backdrop"
            onClick={(e) => {
                e.stopPropagation();
                closeModal();
            }}
        >
            <div className="create-subject-modal modal" onClick={(e) => e.stopPropagation()}>
                <form>
                    <label htmlFor="subject-name">Subject name</label>
                    <input
                        type="text"
                        id="subject-name"
                        className="subject-name-input"
                        value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}
                    />
                    <button className="button" type="submit" onClick={handleSubmit}>
                        Create subject
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateSubject;
