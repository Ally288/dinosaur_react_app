import React from 'react'
import './Form.css'

const EditFormPopup = (props) => {

    if (!props.trigger) return null;

    const handleClick = () => {
        props.setTrigger(false);
    }
    return (
        <div className="popup">
            <div className="popup-inner">
                <span className="close-btn close" onClick={handleClick}></span>
                {props.children}
            </div>
        </div>
    )
}

export default EditFormPopup;