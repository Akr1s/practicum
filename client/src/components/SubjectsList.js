import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';

import CreateSubject from './modals/CreateSubject';
import CreateSubjectIcon from './CreateSubjectIcon';
import Loader from './Loader';
import Subject from './Subject';
import { getUser } from '../utils/getUser';
import { setSubjects } from '../store/reducers/subjects';
import { userRoles } from '../constants/userRoles';
import { SubjectsService } from '../services/subjectsService';

const classes = {
    root: {
        width: '100%',
        padding: '0px 10px',
    },
};

function SubjectsList() {
    const subjects = useSelector((state) => state.subjects);
    const activeSubject = useSelector((state) => state.navigation.subject);
    const dispatch = useDispatch();

    const [isCreating, setIsCreating] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const user = getUser();

    useEffect(() => {
        setIsLoading(true);
        SubjectsService.getSubjects()
            .then((data) => {
                setSubjects(data);
                dispatch(setSubjects(data));
            })
            .finally(() => setIsLoading(false));
    }, []);

    return isLoading ? (
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
