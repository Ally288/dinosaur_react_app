import React from 'react'
import './Popup.css'

const Popup = (props) => {

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

export default Popup;