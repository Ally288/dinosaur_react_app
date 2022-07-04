import React from 'react'
import './Buttons.css'
import { Link } from 'react-router-dom';

const Buttons = ({ setFormPopup }) => {

    const handleClick = () => {
        setFormPopup(true);
    }

    return (
        <nav>
            <button className="button" onClick={handleClick}>Add Dinosaur</button>
            <Link to="/"> <button className="button" >About</button> </Link>
            <Link to="/dinosaurs"><button className="button" >Dinosaurs</button></Link>
            <Link to="/quiz" > <button className="button" >Quiz</button> </Link>


        </nav>
    )
}

export default Buttons;