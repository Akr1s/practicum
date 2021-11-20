import React from 'react';
import './ConfirmModal.css';

function ConfirmModal(props) {
    const { handleClose, handleConfirm, confirmText, cancelText, title } = props;

    return (
        <div
            className="backdrop"
            onClick={(e) => {
                e.stopPropagation();
                handleClose();
            }}
        >
            <div className="delete-subject-modal modal" onClick={(e) => e.stopPropagation()}>
                <span className="message">{title}</span>
                <form>
                    <button
                        className="button"
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            handleConfirm();
                            handleClose();
                        }}
                    >
                        {confirmText}
                    </button>
                    <button className="button btn-cancel" onClick={handleClose}>
                        {cancelText}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ConfirmModal;
