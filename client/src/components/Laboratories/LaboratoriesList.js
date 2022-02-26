import React, { useEffect } from 'react';

import './LaboratoriesList.css';

import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';

import CreateLaboratory from './CreateLaboratory';
import Laboratory from './Laboratory';
import Loader from '../Loader';
import { getUser } from '../../utils/getUser';
import { LABORATORIES_URL } from '../../constants/fetch';
import { setLaboratories } from '../../store/reducers/laboratories';
import { setLaboratoriesLoading } from '../../store/reducers/loadings';
import { userRoles } from '../../constants/userRoles';

function LaboratoriesList(props) {
    const { id, name } = props;
    const loading = useSelector((state) => state.loadings.subjectsLoading);
    const laboratories = useSelector((state) => state.laboratories);
    const dispatch = useDispatch();
    const user = getUser();

    useEffect(() => {
        const getAllLaboratories = async () => {
            dispatch(setLaboratoriesLoading(true));
            const response = await fetch(`${LABORATORIES_URL}/${id}`);
            const subjects = await response.json();
            dispatch(setLaboratories(subjects));
            dispatch(setLaboratoriesLoading(false));
        };

        getAllLaboratories();
    }, [id]);

    return loading ? (
        <Loader />
    ) : (
        <Box className="laboratories-list">
            {user.role !== userRoles.ROLE_STUDENT && <CreateLaboratory />}
            {user.role === userRoles.ROLE_STUDENT && !laboratories.length && (
                <p>
                    Subject <b>{name}</b> does not have any laboratories
                </p>
            )}
            {laboratories.map((laboratory) => (
                <Laboratory laboratory={laboratory} key={laboratory.id} />
            ))}
        </Box>
    );
}

export default LaboratoriesList;
