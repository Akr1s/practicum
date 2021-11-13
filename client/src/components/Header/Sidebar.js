import React from 'react';
import { IoSchool } from 'react-icons/io5';
import MenuSeparator from './MenuSeparator';
import SubjectsList from './SubjectsList';

function Sidebar(props) {
    const { open, onClose } = props;

    return (
        <section className={`sidebar ${open && 'open'}`} onClick={() => onClose()}>
            <div className="sidebar-content">
                <IoSchool className={'school-icon'} />
                <MenuSeparator />
                <SubjectsList />
            </div>
        </section>
    );
}

export default Sidebar;
