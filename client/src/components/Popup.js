import React from 'react'
import './Form.css'

const Popup = (props) => {

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

export default Popup;