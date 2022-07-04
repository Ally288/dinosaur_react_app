import React from 'react'
import '../static/css/Buttons.css'

const Buttons = ({ setFormPopup }) => {

    const handleClick = () => {
        setFormPopup(true);
    }

    return (
        <nav>
            <button className="button" onClick={handleClick}>Add Dinosaur</button>
            <button className="button" >Quiz</button>
        </nav>
    )
}

export default Buttons;