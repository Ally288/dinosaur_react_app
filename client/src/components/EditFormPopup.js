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
                <button className="close-btn" onClick={handleClick}>close</button>
                {props.children}
            </div>
        </div>
    )
}

export default EditFormPopup;