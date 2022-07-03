import React from 'react'
import { deleteDinosaur, editDinosaur } from '../services/services'
import "./FlashcardItem.css"

const FlashcardItem = ({ dinosaur, removeDinosaur, updateDinosaur, selectDinoToEdit }) => {

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
    <div className="dinoItem">
      <h1>{dinosaur.name}</h1>
      <h4>{dinosaur.diet}</h4>
      <h6>{dinosaur.weight}</h6>
      <h6>{dinosaur.length}</h6>
      <h6>{dinosaur.found_in}</h6>
      <p>{dinosaur.description}</p>
      <img src={dinosaur.image} alt="dinosaur" width="120px" />
      <button onClick={handleDelete}> 🗑 </button>
      <button onClick={handleEdit} value={dinosaur._id}> Edit</button>

    </div>
  )
}
export default FlashcardItem;