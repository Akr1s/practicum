import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { componentSelector } from './componentSelector';
import './ViewLaboratory.css';

function ViewLaboratory() {
    const laboratory = useSelector((state) => state.navigation.laboratory);

    if (!laboratory) return <Navigate to="/" />;
    return (
        <section className="page">
            <h2 className="view-page-title">{laboratory.name}</h2>

            {laboratory.data.blocks.map((block) => componentSelector(block))}
        </section>
    );
}

export default ViewLaboratory;
