import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LABORATORIES_URL } from '../../constants/fetch';
import { setLaboratories } from '../../store/reducers/laboratories';
import { setLaboratoriesLoading } from '../../store/reducers/loadings';
import CreateLaboratory from './CreateLaboratory';
import Laboratory from './Laboratory';
import './LaboratoriesList.css';

function LaboratoriesList(props) {
    const { id } = props;
    const loading = useSelector((state) => state.loadings.subjectsLoading);
    const laboratories = useSelector((state) => state.laboratories);
    const dispatch = useDispatch();

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

    if (loading) return <div className="subjects-list">Loading</div>;

    return (
        <div className="laboratories-list">
            <CreateLaboratory />
            {laboratories.map((laboratory) => (
                <Laboratory laboratory={laboratory} key={laboratory.id} />
            ))}
        </div>
    );
}

export default LaboratoriesList;
