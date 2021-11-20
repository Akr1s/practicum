import React from 'react';
import { IoAdd } from 'react-icons/io5';

function CreateSubjectIcon(props) {
    const { handleCreate } = props;
    return (
        <div className="create-subject flex-center" onClick={handleCreate}>
            <IoAdd className="icon" />
        </div>
    );
}

export default CreateSubjectIcon;
