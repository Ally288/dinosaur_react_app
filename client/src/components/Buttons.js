import React from 'react'

const Buttons = ({ addDinosaur }) => {
    return (
        <nav>
            <button addDinosaur={addDinosaur}>Add Dinosaur</button>
            <button>Quiz</button>
        </nav>
    )
}

export default Buttons