import React, { useState } from 'react';
import { deleteDinosaur, editDinosaur } from '../services/services';
import { Howl } from "howler";
import "./FlashcardItem.css"

const FlashcardItem = ({ dinosaur, removeDinosaur, updateDinosaur, selectDinoToEdit }) => {

  const [flip, setFlip] = useState(false);


  const handleDelete = () => {
    deleteDinosaur(dinosaur._id).then(() => {
      removeDinosaur(dinosaur._id);
    })
  }

  const handleEdit = (event) => {
    // Find out the id of the dinosaur for which the edit button has been clicked
    const id = event.target.value;
    console.log(id);
    // Call a function back up the chain which sets selectedDino
    selectDinoToEdit(id);
  }


  const soundSrc = (dinosaur.sound);

  const playSound = (src) => {
    const sound = new Howl({ src });
    sound.play();

  };


  // Inside the edit form use a form useState
  // Default values should be the values of selectedDino
  // Same as other stuff in the add form


  return (
    <>

      <div
        className={`dinoItem ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}>
        <div className={`front ${flip ? 'absolute' : ''}`}>
          <h1 className="dinoname">{dinosaur.name}</h1>
          {/* <div className="icons"> */}
          <img src={dinosaur.image} alt="dinosaur" width="160px" height="160px" />
          {/* </div> */}
        </div>
        <div className='back' >
  
          <h4>Diet: {dinosaur.diet}</h4>
          <h4>Weight: {dinosaur.weight} kg</h4>
          <h4>Length: {dinosaur.length} m</h4>
          <h4>Found In: {dinosaur.found_in}</h4>

          <p>{dinosaur.description}</p>
          <button className="back-buttons" onClick={handleEdit} value={dinosaur._id}> ✍️ Edit</button>
          <button className="back-buttons" onClick={handleDelete}> ♻️ Delete</button>
          <button className="back-buttons" onClick={() => playSound(soundSrc)}> 🔉 Roar!</button>
        </div>

      </div>
    </>
  )
}

export default FlashcardItem;