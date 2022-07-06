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
            <Link to="/dinosaurs"><button className="button" >Dinosaurs</button></Link>
            <Link to="/quiz" > <button className="button" >Quiz</button> </Link>
            <Link to="/chart" > <button className="button" >Dino Chart</button> </Link>
            <Link to="/"> <button className="button" >About</button> </Link>


        </nav>
    )
}

export default Buttons;