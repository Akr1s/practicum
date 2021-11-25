import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSubject } from '../../../store/reducers/subjects';
import './UpdateSubject.css';

function UpdateSubject(props) {
    const { subject, closeModal } = props;
    const { id, name } = subject;

    const [nameValue, setNameValue] = useState(name);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateSubject({ id, name: nameValue }));
    };

    // return (
    //     <div
    //         className="backdrop"
    //         onClick={(e) => {
    //             e.stopPropagation();
    //             closeModal();
    //         }}
    //     >
    //         <div className="update-subject-modal modal" onClick={(e) => e.stopPropagation()}>
    //             <form>
    //                 <label htmlFor="subject-name">Subject name</label>
    //                 <input
    //                     type="text"
    //                     id="subject-name"
    //                     className="subject-name-input"
    //                     value={nameValue}
    //                     onChange={(e) => setNameValue(e.target.value)}
    //                 />
    //                 <button className="button" type="submit" onClick={handleSubmit}>
    //                     Update subject
    //                 </button>
    //             </form>
    //         </div>
    //     </div>
    // );

    return (
        <Dialog open={true} onClose={closeModal}>
            <DialogTitle>Update Subject</DialogTitle>
            <DialogContent>
                <form>
                    <label htmlFor="subject-name">Subject name</label>
                    <input
                        type="text"
                        id="subject-name"
                        className="subject-name-input"
                        value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}
                    />
                    <button className="button" type="submit" onClick={handleSubmit}>
                        Update subject
                    </button>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeModal}>Cancel</Button>
                <Button onClick={handleSubmit}>Update</Button>
            </DialogActions>
        </Dialog>
    );
}

export default UpdateSubject;
