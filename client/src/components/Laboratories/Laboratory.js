import { Card } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { IoPencil, IoTrash } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { LABORATORIES_URL } from '../../constants/fetch';
import { deleteLaboratory } from '../../store/reducers/laboratories';
import { setLaboratory } from '../../store/reducers/navigation';
import { replaceSpaces } from '../../utils/replaceSpaces';
import { useSnackbar } from 'notistack';
import { userRoles } from '../../constants/userRoles';
import { getUser } from '../../utils/getUser';

function Laboratory(props) {
    const { pathname } = useLocation();
    const { laboratory } = props;
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const user = getUser();

    const deleteLaboratoryHandler = async () => {
        try {
            await fetch(`${LABORATORIES_URL}/${laboratory.id}`, { method: 'DELETE' });
            dispatch(deleteLaboratory(laboratory.id));
            enqueueSnackbar('The laboratory was deleted!', { variant: 'info' });
        } catch (error) {
            enqueueSnackbar('An error occured!', { variant: 'error' });
        }
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
