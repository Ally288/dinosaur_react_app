import React, { useState } from 'react'
import { deleteDinosaur, editDinosaur } from '../services/services'
import "./FlashcardItem.css"

const FlashcardItem = ({ dinosaur, removeDinosaur, updateDinosaur, selectDinoToEdit }) => {

  const [flip, setFlip] = useState(false);


  const handleDelete = () => {
    deleteDinosaur(dinosaur._id).then(() => {
      removeDinosaur(dinosaur._id);
    })
  }

  // const handleEdit = () => {
  //   editDinosaur(dinosaur._id).then(() => {
  //     updateDinosaur(dinosaur._id)
  //   })
  // }

  const handleEdit = (event) => {
    // Find out the id of the dinosaur for which the edit button has been clicked
    const id = event.target.value;
    // Call a function back up the chain which sets selectedDino
    selectDinoToEdit(id);
  }

  // Inside the edit form use a form useState
  // Default values should be the values of selectedDino
  // Same as other stuff in the add form


  return (

    <div
      className={`dinoItem ${flip ? 'flip' : ''}`}
      onClick={() => setFlip(!flip)}>
      <div className="front">
        <h1>{dinosaur.name}</h1>
        <div className="icons">
          <img src={dinosaur.image} alt="dinosaur" width="120px" height="120px" />
          <button onClick={handleDelete}> 🗑 </button>
          <button onClick={handleEdit}> Edit</button>
        </div>
      </div>
      <div className='back' >
        <h2>{dinosaur.diet}</h2>
        <h4>{dinosaur.weight}</h4>
        <h4>{dinosaur.length}</h4>
        <h4>{dinosaur.found_in}</h4>
        <p>{dinosaur.description}</p>
      </div>

    </div>

  )
}

export default FlashcardItem;