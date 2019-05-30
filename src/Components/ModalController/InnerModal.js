import React from 'react';

const innerModal = (props) => {
    return (
        <div className="modal-container" style={{ height: '100%' }}>
            <div className="inner-modal" style={{ height: '100%' }}>
                <div className="modal-view" style={{ height: '100%' }}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default innerModal;