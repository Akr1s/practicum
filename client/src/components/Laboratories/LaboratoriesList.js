import React, { useEffect, useState } from 'react';

import './LaboratoriesList.css';

import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';

import CreateLaboratory from './CreateLaboratory';
import Laboratory from './Laboratory';
import Loader from '../Loader';
import { getUser } from '../../utils/getUser';
import { setLaboratories } from '../../store/reducers/laboratories';
import { userRoles } from '../../constants/userRoles';
import { LaboratoriesService } from '../../services/laboratoriseService';

function LaboratoriesList(props) {
    const { id, name } = props;
    const laboratories = useSelector((state) => state.laboratories);
    const dispatch = useDispatch();
    const user = getUser();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        LaboratoriesService.getLaboratories(id)
            .then((subjects) => {
                dispatch(setLaboratories(subjects));
            })
            .finally(() => setIsLoading(false));
    }, [id]);

    return isLoading ? (
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
