import React, { useState } from 'react';

import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import { IoTrash, IoPencil } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

import ConfirmModal from '../../modals/ConfirmModal';
import UpdateSubject from '../../modals/UpdateSubject';
import { appMessages } from '../../constants/appMessage';
import { deleteSubject } from '../../store/reducers/subjects';
import { getUser } from '../../utils/getUser';
import { replaceSpaces } from '../../utils/replaceSpaces';
import { setSubject } from '../../store/reducers/navigation';
import { Severities } from '../../constants/severities';
import { SubjectsService } from '../../services/subjectsService';
import { userRoles } from '../../constants/userRoles';

const classes = {
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5px 10px',
        fontSize: '18px',
        marginTop: '10px',
    },
    active: {
        borderRadius: '10px',
        backgroundColor: 'var(--gray-color, "gray")',
        '&:hover': {
            borderRadius: '10px',
            backgroundColor: 'var(--light-gray-color, "gray")',
        },
    },
    link: {
        display: 'block',
        width: '100%',
        textDecoration: 'none',
        color: 'var(--dark-gray-color, "dimgray")',
    },
    icon: {
        cursor: 'pointer',
        '&:hover': {
            transform: 'scale(1.2)',
        },
        '&::not(:last-of-type)': {
            marginRight: '8px',
        },
    },
};

export default function Subject(props) {
    const { subject, isActive } = props;
    const { name, id } = subject;
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();

    const [isUpdating, setIsUpdating] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const link = replaceSpaces(name);
    const user = getUser();

    const deleteSubjectHandler = async () => {
        SubjectsService.deleteSubject(id)
            .then(() => {
                dispatch(deleteSubject(id));
                enqueueSnackbar('The subject was deleted!', Severities.INFO);
            })
            .catch(() => enqueueSnackbar(appMessages.generalError, Severities.ERROR));
    };

    const setNavigationSubject = () => {
        dispatch(setSubject(subject));
    };

    return (
        <Card sx={{ ...classes.root, ...(isActive ? classes.active : {}) }}>
            <Link style={classes.link} to={`/${link}`} onClick={setNavigationSubject}>
                {name}
            </Link>
            {user.role !== userRoles.ROLE_STUDENT && (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IoPencil
                        style={classes.icon}
                        onClick={() => {
                            setIsUpdating(true);
                        }}
                    />
                    <IoTrash
                        style={classes.icon}
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
