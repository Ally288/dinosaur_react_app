import React, { useState } from 'react'
import { deleteDinosaur, editDinosaur } from '../services/services'
import "../static/css/FlashcardItem.css"

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
    console.log(id);
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
        </div>
      </div>
      <div className='back' >
        <h4>{dinosaur.name}</h4>
        <h5>Diet: {dinosaur.diet}</h5>
        <h5>Weight: {dinosaur.weight.toLocaleString(2)}kg</h5>
        <h5>Length: {dinosaur.length.toFixed(2)}m</h5>
        <h5>Found in: {dinosaur.found_in}</h5>
        <p>{dinosaur.description}</p>
        <button className="back-buttons" onClick={handleEdit} value={dinosaur._id}> ✍️ Edit</button>
        <button className="back-buttons" onClick={handleDelete}> ♻️ Delete</button>
      </div>

    </div>

  )
}

export default FlashcardItem;