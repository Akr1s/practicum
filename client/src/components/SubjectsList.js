import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';

import CreateSubject from './modals/CreateSubject';
import CreateSubjectIcon from './CreateSubjectIcon';
import Loader from './Loader';
import Subject from './Subject';
import { getUser } from '../utils/getUser';
import { setSubjects } from '../store/reducers/subjects';
import { setSubjectsLoading } from '../store/reducers/loadings';
import { SUBJECTS_URL } from '../constants/fetch';
import { userRoles } from '../constants/userRoles';

const classes = {
    root: {
        width: '100%',
        padding: '0px 10px',
    },
};

function SubjectsList() {
    const loading = useSelector((state) => state.loadings.subjectsLoading);
    const subjects = useSelector((state) => state.subjects);
    const activeSubject = useSelector((state) => state.navigation.subject);
    const dispatch = useDispatch();

    const [isCreating, setIsCreating] = useState(false);

    const user = getUser();

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

    return loading ? (
        <Loader />
    ) : (
        <Box sx={classes.root}>
            {user.role !== userRoles.ROLE_STUDENT && (
                <CreateSubjectIcon
                    handleCreate={(e) => {
                        setIsCreating(true);
                    }}
                />
            )}
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
        </Box>
    );
}

export default SubjectsList;
