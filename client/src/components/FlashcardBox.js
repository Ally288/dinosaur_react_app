import React from 'react'
import FlashcardItem from './FlashcardItem'
import "./FlashcardBox.css"

const FlashcardBox = ({ dinosaurs, removeDinosaur, updateDinosaur, selectDinoToEdit }) => {
    const allDinosaurs = dinosaurs.map((dinosaur) => {
        return <FlashcardItem dinosaur={dinosaur} key={dinosaur._id}
            removeDinosaur={removeDinosaur} updateDinosaur={updateDinosaur} selectDinoToEdit={selectDinoToEdit}
        />
    })


    return (
        <>
            <div className="dinogrid"> {allDinosaurs} </div>

        </>
    )
}

export default FlashcardBox;