import React from 'react'
import Flashcarditem from './FlashcardItem'

const FlashcardBox = ({dinosaurs, removeDinosaur}) => {
    const allDinosaurs = dinosaurs.map((dinosaur) => {
      return <FlashcardItem dinosaur={dinosaur} key={dinosaur._id} removeDinosaur={removeDinosaur}
/>    })  ///EDIT and SHOW will pass through


    return (
        <>
        <div className="dinogrid"> {allDinosaurs} </div>
           
        </>
    )
}

export default FlashcardBox;