import React from 'react';
import { IoPencil, IoTrash } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { LABORATORIES_URL } from '../../constants/fetch';
import { deleteLaboratory } from '../../store/reducers/laboratories';
import { setLaboratory } from '../../store/reducers/navigation';
import { replaceSpaces } from '../../utils/replaceSpaces';

function Laboratory(props) {
    const { pathname } = useLocation();
    const { laboratory } = props;
    const dispatch = useDispatch();

    const deleteLaboratoryHandler = async () => {
        try {
            await fetch(`${LABORATORIES_URL}/${laboratory.id}`, { method: 'DELETE' });
            dispatch(deleteLaboratory(laboratory.id));
        } catch (error) {
            console.log(error);
        }
    };

    const setNavigationLaboratory = () => {
        dispatch(setLaboratory(laboratory));
    };
    return (
        <Link
            to={`${pathname}/${replaceSpaces(laboratory.name)}`}
            onClick={setNavigationLaboratory}
            className="laboratory-link"
        >
            <article className="laboratory-item">{laboratory.name}</article>
            <div className="laboratory_icons">
                <Link to={`${pathname}/${replaceSpaces(laboratory.name)}/edit`}>
                    <IoPencil
                        className="icon"
                        onClick={(e) => {
                            setNavigationLaboratory();
                        }}
                    />
                </Link>
                <IoTrash
                    className="icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        deleteLaboratoryHandler();
                    }}
                />
            </div>
        </Link>
    );
}

export default Laboratory;
