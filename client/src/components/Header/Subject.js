import React from 'react';
import { IoTrash, IoPencil } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { replaceSpaces } from '../../utils/replaceSpaces';

function Subject(props) {
    const { subject } = props;
    const { name } = subject;
    const link = replaceSpaces(name);
    return (
        <div className="subject">
            <Link className="subject_name" to={`/${link}`}>
                {name}
            </Link>
            <div className="subject_icons">
                <IoPencil className="icon" />
                <IoTrash className="icon" />
            </div>
        </div>
    );
}

export default Subject;
