import React from 'react';

import { Card } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import LaboratoryIcon from './LaboratoryIcon';
import { appMessages } from '../../constants/appMessage';
import { deleteLaboratory } from '../../store/reducers/laboratories';
import { LaboratoriesService } from '../../services/laboratoriseService';
import { replaceSpaces } from '../../utils/replaceSpaces';
import { setLaboratory } from '../../store/reducers/navigation';
import { Severities } from '../../constants/severities';

const classes = {
    link: { display: 'block', position: 'relative' },
    icons: { position: 'absolute', top: '10px', right: '10px' },
    icon: {
        fontSize: '18px',
        '&:hover': {
            transform: 'scale(1.2)',
        },
    },
    laboratory: {
        width: '120px',
        height: '150px',
        backgroundColor: 'var(--white-color, white)',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        '&:hover': {
            backgroundColor: 'var(--light-gray-color, gray)',
        },
    },
};

export default function Laboratory(props) {
    const { pathname } = useLocation();
    const { laboratory } = props;
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const deleteLaboratoryHandler = async () => {
        LaboratoriesService.deleteLaboratory(laboratory.id)
            .then(() => {
                dispatch(deleteLaboratory(laboratory.id));
                enqueueSnackbar('The laboratory was deleted!', Severities.INFO);
            })
            .catch(() => enqueueSnackbar(appMessages.generalError, Severities.ERROR));
    };

    const setNavigationLaboratory = () => {
        dispatch(setLaboratory(laboratory));
    };
    return (
        <Link
            to={`${pathname}/${replaceSpaces(laboratory.name)}`}
            onClick={setNavigationLaboratory}
            style={classes.link}
        >
            <Card sx={classes.laboratory}>{laboratory.name}</Card>
            <LaboratoryIcon
                onEdit={setNavigationLaboratory}
                onDelete={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    deleteLaboratoryHandler();
                }}
                pathname={pathname}
                laboratoryName={replaceSpaces(laboratory.name)}
            />
        </Link>
    );
}
