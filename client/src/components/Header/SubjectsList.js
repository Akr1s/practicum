import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SUBJECTS_URL } from '../../constants/fetch';
import CreateSubject from '../modals/CreateSubject/CreateSubject';
import Subject from './Subject';
import { setSubjectsLoading } from '../../store/reducers/loadings';
import { setSubjects } from '../../store/reducers/subjects';
import CreateSubjectIcon from './CreateSubjectIcon';

function SubjectsList() {
    const [isCreating, setIsCreating] = useState(false);
    const loading = useSelector((state) => state.loadings.subjectsLoading);
    const subjects = useSelector((state) => state.subjects);
    const activeSubject = useSelector((state) => state.navigation.subject);
    const dispatch = useDispatch();

    useEffect(() => {
        const getAllSubjects = async () => {
            dispatch(setSubjectsLoading(true));
            const response = await fetch(SUBJECTS_URL);
            const subjects = await response.json();
            dispatch(setSubjects(subjects));
            dispatch(setSubjectsLoading(false));
        };

        getAllSubjects();
    }, []);

    if (loading) return <div className="subjects-list">Loading</div>;

    return (
        <div className="subjects-list">
            <CreateSubjectIcon
                handleCreate={(e) => {
                    e.stopPropagation();
                    setIsCreating(true);
                }}
            />
            {subjects.map((subject) => {
                return (
                    <Subject
                        subject={subject}
                        key={subject.name}
                        isActive={subject.id === activeSubject?.id}
                    />
                );
            })}
            {isCreating && <CreateSubject closeModal={() => setIsCreating(false)} />}
        </div>
    );
}

export default SubjectsList;
