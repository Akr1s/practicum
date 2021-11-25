import React from 'react';
import { IoAdd } from 'react-icons/io5';
import Box from '@mui/material/Box';

function CreateSubjectIcon(props) {
    const { handleCreate } = props;
    return (
        <Box
            className="create-subject flex-center"
            onClick={handleCreate}
            sx={{ fontSize: '30px' }}
        >
            <IoAdd className="icon" />
        </Box>
    );
}

export default CreateSubjectIcon;
