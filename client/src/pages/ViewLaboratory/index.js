import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ViewLaboratory() {
    const laboratory = useSelector((state) => state.navigation.laboratory);

    if (!laboratory) return <Navigate to="/" />;
    return (
        <section className="page">
            {laboratory.name}
            {laboratory.data.blocks.map((block) => (
                <p>
                    {block.type} : {block.data.text}
                </p>
            ))}
        </section>
    );
}

export default ViewLaboratory;
