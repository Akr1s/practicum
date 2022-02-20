import React, { useState } from 'react';

import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import { IoTrash, IoPencil } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

import ConfirmModal from './modals/ConfirmModal';
import UpdateSubject from './modals/UpdateSubject';
import { deleteSubject } from '../store/reducers/subjects';
import { getUser } from '../utils/getUser';
import { replaceSpaces } from '../utils/replaceSpaces';
import { setSubject } from '../store/reducers/navigation';
import { SUBJECTS_URL } from '../constants/fetch';
import { userRoles } from '../constants/userRoles';

function Subject(props) {
    const { subject, isActive } = props;
    const { name, id } = subject;
    const link = replaceSpaces(name);
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const user = getUser();

    const [isUpdating, setIsUpdating] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const deleteSubjectHandler = async () => {
        try {
            await fetch(`${SUBJECTS_URL}/${id}`, { method: 'DELETE' });
            dispatch(deleteSubject(id));
            enqueueSnackbar('The subject was deleted!', { variant: 'info' });
        } catch (error) {
            enqueueSnackbar('The laboratory was deleted!', { variant: 'info' });
        }
    };

    const setNavigationSubject = () => {
        dispatch(setSubject(subject));
    };

    return (
        <Card className={`subject ${isActive ? 'active' : ''}`} sx={{ marginTop: '10px' }}>
            <Link
                style={{ display: 'block', width: '100%' }}
                className="subject_name"
                to={`/${link}`}
                onClick={setNavigationSubject}
            >
                {name}
            </Link>
            {user.role !== userRoles.ROLE_STUDENT && (
                <Box className="subject_icons">
                    <IoPencil
                        className="icon"
                        onClick={() => {
                            setIsUpdating(true);
                        }}
                    />
                    <IoTrash
                        className="icon"
                        onClick={() => {
                            setIsDeleting(true);
                        }}
                    />
                </Box>
            )}
            {isUpdating && (
                <UpdateSubject subject={subject} closeModal={() => setIsUpdating(false)} />
            )}
            {isDeleting && (
                <ConfirmModal
                    title="Do you wanna delete this subject?"
                    confirmText="Delete subject"
                    cancelText="Cancel"
                    handleConfirm={deleteSubjectHandler}
                    handleClose={() => setIsDeleting(false)}
                />
            )}
        </Card>
    );
}

export default Subject;
