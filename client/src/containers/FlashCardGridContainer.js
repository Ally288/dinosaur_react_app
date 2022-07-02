import React, { useState, useEffect } from 'react';
import Buttons from '../components/Buttons';
import Header from '../components/Header';
import FlashcardBox from '../components/FlashcardBox';
import { getDinosaurs, editDinosaur } from '../services/services';

const FlashCardGridContainer = () => {

  const [dinosaurs, setDinosaurs] = useState([])

  useEffect(() => {
    getDinosaurs().then((allDinosaurs) => {
      setDinosaurs(allDinosaurs);
    })
  }, []);


  const addDinosaur = (dinosaur) => {
    const temp = dinosaurs.map(d => d);

    temp.push(dinosaur);
    setDinosaurs(temp);
  }

  const removeDinosaur = (id) => {

    const temp = dinosaurs.map(d => d);
    const indexToDel = temp.map(d => d._id).indexOf(id);
  
    console.log(indexToDel);

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

  // const editDinosaur = (id)

  //Show function to add here



  return (
    <>
      <Header />
      <Buttons addDinosaur={addDinosaur} />

      <FlashcardBox dinosaurs={dinosaurs} removeDinosaur={removeDinosaur} updateDinosaur={updateDinosaur}/> {/*PASS down EDIT and SHOW*/}

    </>
  )
}

export default FlashCardGridContainer;