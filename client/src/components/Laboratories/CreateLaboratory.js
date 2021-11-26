import { Card } from '@mui/material';
import React from 'react';
import { IoAdd } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function CreateLaboratory() {
    const { pathname } = useLocation();
    return (
        <Link to={`${pathname}/create`}>
            <Card className="laboratory-item create-laboratory" title="Create">
                <IoAdd className="create-laboratory-icon" />
            </Card>
        </Link>
    );
}

export default CreateLaboratory;
