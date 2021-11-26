import React from 'react';
import { IoAdd } from 'react-icons/io5';
import { Card } from '@mui/material';

function CreateSubjectIcon(props) {
    const { handleCreate } = props;
    return (
        <Card
            className="create-subject flex-center"
            onClick={handleCreate}
            sx={{ fontSize: '30px' }}
        >
            <IoAdd className="icon" />
        </Card>
    );
}

export default CreateSubjectIcon;
