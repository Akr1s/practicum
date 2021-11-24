import React from 'react';
import { IoAdd } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function CreateLaboratory() {
    const { pathname } = useLocation();
    return (
        <Link to={`${pathname}/create`}>
            <article className="laboratory-item create-laboratory" title="Create">
                <IoAdd className="create-laboratory-icon" />
            </article>
        </Link>
    );
}

export default CreateLaboratory;
