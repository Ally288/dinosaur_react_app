import React from 'react'
import FlashcardItem from './FlashcardItem'
import "./FlashcardBox.css"

const FlashcardBox = ({ dinosaurs, removeDinosaur, updateDinosaur }) => {
    const allDinosaurs = dinosaurs.map((dinosaur) => {
        return <FlashcardItem dinosaur={dinosaur} key={dinosaur._id} 
        removeDinosaur={removeDinosaur} updateDinosaur={updateDinosaur}
        />
    })  ///SHOW will pass through


    return (
        <>
            <div className="dinogrid"> {allDinosaurs} </div>

        </>
    )
}

export default FlashcardBox;