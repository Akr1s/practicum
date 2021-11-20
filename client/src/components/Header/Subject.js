import React, { useState } from 'react';
import { IoTrash, IoPencil } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { replaceSpaces } from '../../utils/replaceSpaces';
import UpdateSubject from '../modals/UpdateSubject/UpdateSubject';
import ConfirmModal from '../modals/ConfirmModal/ConfirmModal';
import { SUBJECTS_URL } from '../../constants/fetch';
import { useDispatch } from 'react-redux';
import { deleteSubject } from '../../store/reducers/subjects';
import { setSubject } from '../../store/reducers/navigation';

function Subject(props) {
    const { subject, isActive } = props;
    const { name, id } = subject;
    const link = replaceSpaces(name);
    const dispatch = useDispatch();

    const [isUpdating, setIsUpdating] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const deleteSubjectHandler = async () => {
        try {
            await fetch(`${SUBJECTS_URL}/${id}`, { method: 'DELETE' });
            dispatch(deleteSubject(id));
        } catch (error) {
            console.log(error);
        }
    };

    const setNavigationSubject = () => {
        dispatch(setSubject(subject));
    };

    return (
        <div className={`subject ${isActive ? 'active' : ''}`}>
            <Link className="subject_name" to={`/${link}`} onClick={setNavigationSubject}>
                {name}
            </Link>
            <div className="subject_icons">
                <IoPencil
                    className="icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsUpdating(true);
                    }}
                />
                <IoTrash
                    className="icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsDeleting(true);
                    }}
                />
            </div>
            {isUpdating && (
                <UpdateSubject subject={subject} closeModal={() => setIsUpdating(false)} />
            )}
            {isDeleting && (
                <ConfirmModal
                    title="Do you wanna delete this subject?"
                    confirmText="Delete subject"
                    cancelText="Cancel"
                    handleConfirm={deleteSubjectHandler}
                    handleClose={() => setIsDeleting(false)}
                />
            )}
        </div>
    );
}

export default Subject;
