import React, { useState, useEffect } from 'react';
import Buttons from '../components/Buttons';
import Header from '../components/Header';
import FlashcardBox from '../components/FlashcardBox';
import { getDinosaurs, editDinosaur } from '../services/services';
import Popup from '../components/Popup';
import FlashcardForm from '../components/FlashcardForm';
import EditFormPopup from '../components/EditFormPopup';
import EditForm from '../components/EditForm';
import Quiz from './Quiz';


const FlashCardGridContainer = ({ dinosaurs, setDinosaurs, formPopup, setFormPopup, addDinosaur }) => {




  const [selectedDino, setSelectedDino] = useState(null);
  const [editFormPopup, setEditFormPopup] = useState(false);




  const removeDinosaur = (id) => {

    const temp = dinosaurs.map(d => d);
    const indexToDel = temp.map(d => d._id).indexOf(id);

    // console.log(indexToDel);

    temp.splice(indexToDel, 1);
    setDinosaurs(temp);
  }

  const updateDinosaur = editedDinosaur => {
    editDinosaur(editedDinosaur);

    const updatedDinosaurList = dinosaurs.findIndex(dinosaur => dinosaur._id === editedDinosaur._id);
    const updatedDinosaurs = [...dinosaurs];
    updatedDinosaurs[updatedDinosaurList] = editedDinosaur;
    setDinosaurs(updatedDinosaurs);

  }




  //Edit function goes here

  const selectDinoToEdit = (id) => {
    // Filter the list of dinosaurs to find the one which matches the id and set it as dinoToEdit
    const findByID = dinosaurs.filter(dinosaur => dinosaur._id === id);
    // Returns an object inside an array so need to access first object
    const dinoToEdit = findByID[0];
    setSelectedDino(dinoToEdit);
    setEditFormPopup(true);
  }

  // const editDinosaur = (id)


  //Show function to add here

  return (
    <>
      <FlashcardBox dinosaurs={dinosaurs} removeDinosaur={removeDinosaur} selectDinoToEdit={selectDinoToEdit} />

      <EditFormPopup trigger={editFormPopup} setTrigger={setEditFormPopup}>
        <EditForm setEditFormPopup={setEditFormPopup} setDinosaurs={setDinosaurs} selectedDino={selectedDino} updateDinosaur={updateDinosaur} />
      </EditFormPopup>
    </>
  )
}

export default FlashCardGridContainer;