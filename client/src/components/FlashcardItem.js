import React from 'react'
import { deleteDinosaur } from '../services/services'

const FlashcardItem = ({ dinosaur, removeDinosaur }) => {

  const handleDelete = () => {
    deleteDinosaur(dinosaur._id).then(() => {
      removeDinosaur(dinosaur._id);
    })
  }

  const handleEdit = () => {

  }


  return (
    <div>
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