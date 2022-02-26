import React from 'react';

import { Box } from '@mui/system';
import { Card } from '@mui/material';
import { IoPencil, IoTrash } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { appMessages } from '../../constants/appMessage';
import { deleteLaboratory } from '../../store/reducers/laboratories';
import { getUser } from '../../utils/getUser';
import { LaboratoriesService } from '../../services/laboratoriseService';
import { replaceSpaces } from '../../utils/replaceSpaces';
import { setLaboratory } from '../../store/reducers/navigation';
import { Severities } from '../../constants/severities';
import { userRoles } from '../../constants/userRoles';

function Laboratory(props) {
    const { pathname } = useLocation();
    const { laboratory } = props;
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const user = getUser();

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
            className="laboratory-link"
        >
            <Card className="laboratory-item">{laboratory.name}</Card>
            {user.role !== userRoles.ROLE_STUDENT && (
                <Box className="laboratory_icons">
                    <Link to={`${pathname}/${replaceSpaces(laboratory.name)}/edit`}>
                        <IoPencil
                            className="icon"
                            onClick={(e) => {
                                setNavigationLaboratory();
                            }}
                        />
                    </Link>
                    <IoTrash
                        className="icon"
                        onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            deleteLaboratoryHandler();
                        }}
                    />
                </Box>
            )}
        </Link>
    );
}

export default Laboratory;
