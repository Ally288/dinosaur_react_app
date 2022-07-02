import React from 'react'
import { deleteDinosaur, editDinosaur } from '../services/services'
import "./FlashcardItem.css"

const FlashcardItem = ({ dinosaur, removeDinosaur, updateDinosaur }) => {

  const handleDelete = () => {
    deleteDinosaur(dinosaur._id).then(() => {
      removeDinosaur(dinosaur._id);
    })
  }

  const handleEdit = () => {
    editDinosaur(dinosaur._id).then(() => {
      updateDinosaur(dinosaur._id)
    })
  }


  return (
    <div className="dinoItem">
      <h1>{dinosaur.name}</h1>
      <h4>{dinosaur.diet}</h4>
      <h6>{dinosaur.weight}</h6>
      <h6>{dinosaur.length}</h6>
      <h6>{dinosaur.found_in}</h6>
      <p>{dinosaur.description}</p>
      <button onClick={handleDelete}> 🗑 </button>
      <button onClick={handleEdit}> Edit</button>

    </div>
  )
}

export default FlashcardItem;