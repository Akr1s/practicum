import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { setLaboratory } from '../../store/reducers/navigation';
import { replaceSpaces } from '../../utils/replaceSpaces';

function Laboratory(props) {
    const { pathname } = useLocation();
    const { laboratory } = props;
    const dispatch = useDispatch();

    const setNavigationLaboratory = () => {
        dispatch(setLaboratory(laboratory));
    };
    return (
        <Link
            to={`${pathname}/${replaceSpaces(laboratory.name)}`}
            onClick={setNavigationLaboratory}
        >
            <article className="laboratory-item">{laboratory.name}</article>
        </Link>
    );
}

export default Laboratory;
