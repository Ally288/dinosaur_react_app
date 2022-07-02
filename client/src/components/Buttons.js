import React from 'react'
import './Buttons.css'

const Buttons = ({ addDinosaur, setFormPopup }) => {

    const handleClick = () => {
        setFormPopup(true);
    }

    return (
        <nav>
            <button className="button" addDinosaur={addDinosaur} onClick={handleClick}>Add Dinosaur</button>
            <button className="button" >Quiz</button>
        </nav>
    )
}

export default Buttons;