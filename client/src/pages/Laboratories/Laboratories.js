import React from 'react';
import { useSelector } from 'react-redux';
import LaboratoriesList from '../../components/Laboratories/LaboratoriesList';
import { Navigate } from 'react-router-dom';

function Laborataries() {
    const subject = useSelector((state) => state.navigation.subject);
    if (!subject) return <Navigate to="/" />;
    return (
        <section className="page">
            <LaboratoriesList id={subject.id} />
        </section>
    );
}

export default Laborataries;
