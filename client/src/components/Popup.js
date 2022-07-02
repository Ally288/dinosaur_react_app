import React from 'react'
import './Popup.css'

const Popup = (props) => {

    const handleClick = () => {
        props.setTrigger(false);
    }
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={handleClick}>close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup