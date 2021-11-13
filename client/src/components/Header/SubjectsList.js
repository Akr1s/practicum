import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SUBJECTS_URL } from '../../constants/fetch';
import CreateSubject from './CreateSubject';
import Subject from './Subject';
import { setSubjectsLoading } from '../../store/reducers/loadings';
import { setSubjects } from '../../store/reducers/subjects';

function SubjectsList() {
    const loading = useSelector((state) => state.loadings.subjectsLoading);
    const subjects = useSelector((state) => state.subjects);
    const dispatch = useDispatch();

    useEffect(() => {
        const getAllLessons = async () => {
            dispatch(setSubjectsLoading(true));
            const response = await fetch(SUBJECTS_URL);
            const subjects = await response.json();
            dispatch(setSubjects(subjects));
            dispatch(setSubjectsLoading(false));
        };

        getAllLessons();
    }, []);

    if (loading) return <div className="subjects-list">Loading</div>;

    return (
        <div className="subjects-list">
            <CreateSubject />
            {subjects.map((subject) => {
                return <Subject subject={subject} key={subject.name} />;
            })}
        </div>
    );
}

export default SubjectsList;
