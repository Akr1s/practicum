import React, { useState } from 'react';

import { Card } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

import CustomDialog from '../../components/CustomDialog';
import UpdateSubject from '../../modals/UpdateSubject';
import { appMessages } from '../../constants/appMessage';
import { deleteSubject } from '../../store/reducers/subjects';
import { replaceSpaces } from '../../utils/replaceSpaces';
import { setSubject } from '../../store/reducers/navigation';
import { Severities } from '../../constants/severities';
import { SubjectsService } from '../../services/subjectsService';
import SubjectIcons from './SubjectIcons';

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
};

export default function Subject(props) {
    const { subject, isActive } = props;
    const { name, id } = subject;
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();

    const [isUpdating, setIsUpdating] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

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
            <Link
                style={classes.link}
                to={`/${replaceSpaces(name)}`}
                onClick={setNavigationSubject}
            >
                {name}
            </Link>
            <SubjectIcons
                onEdit={() => {
                    setIsUpdating(true);
                }}
                onDelete={() => {
                    setIsDeleting(true);
                }}
            />
            {isUpdating && (
                <UpdateSubject subject={subject} closeModal={() => setIsUpdating(false)} />
            )}
            {isDeleting && (
                <CustomDialog
                    title="Do you wanna delete this subject?"
                    confirmText="Delete subject"
                    cancelText="Cancel"
                    handleConfirm={deleteSubjectHandler}
                    handleClose={() => setIsDeleting(false)}
                    disableSubmit={false}
                />
            )}
        </Card>
    );
}
