import React, { useEffect } from 'react';

import './LaboratoriesList.css';

import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../../utils/getUser';
import { LABORATORIES_URL } from '../../constants/fetch';
import { setLaboratories } from '../../store/reducers/laboratories';
import { setLaboratoriesLoading } from '../../store/reducers/loadings';
import { userRoles } from '../../constants/userRoles';
import CreateLaboratory from './CreateLaboratory';
import Laboratory from './Laboratory';

const classes = {
    loading: {
        width: '100%',
        padding: '0px 10px',
    },
};

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

    if (loading) return <Box sx={classes.loading}>Loading</Box>;

    return (
        <div className="laboratories-list">
            {user.role !== userRoles.ROLE_STUDENT && <CreateLaboratory />}
            {user.role === userRoles.ROLE_STUDENT && !laboratories.length && (
                <p>
                    Subject <b>{name}</b> does not have any laboratories
                </p>
            )}
            {laboratories.map((laboratory) => (
                <Laboratory laboratory={laboratory} key={laboratory.id} />
            ))}
        </div>
    );
}

export default LaboratoriesList;
