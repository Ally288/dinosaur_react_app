import React from 'react'
import './Buttons.css'

const Buttons = ({ addDinosaur }) => {
    return (
        <nav>
            <button className="button" addDinosaur={addDinosaur}>Add Dinosaur</button>
            <button className="button" >Quiz</button>
        </nav>
    )
}

export default Buttons;