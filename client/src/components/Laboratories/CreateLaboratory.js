import React from 'react';
import { IoAdd } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function CreateLaboratory() {
    const { pathname } = useLocation();
    return (
        <article className="laboratory-item laboratory-create">
            <Link to={`${pathname}/create`}>
                <IoAdd className="create-laboratory-icon" title="Create" />
            </Link>
        </article>
    );
}

export default CreateLaboratory;
