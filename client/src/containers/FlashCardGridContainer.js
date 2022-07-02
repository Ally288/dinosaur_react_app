import React, { useState, useEffect } from 'react';
import Buttons from '../components/Buttons';
import Header from '../components/Header';
import FlashcardBox from '../components/FlashcardBox';
import { getDinosaurs } from '../services/services';

const FlashCardGridContainer = () => {

  const [dinosaurs, setDinosaurs] = useState([])

  useEffect(() => {
    getDinosaurs().then((allDinosaurs) => {
      setDinosaurs(allDinosaurs);
    })
  }, []);


  const addDinosaur = (dinosaur) => {
    const temp = dinosaurs.map(s => s);
    temp.push(dinosaur);
    setDinosaurs(temp);
  }

  const removeDinosaur = (id) => {
    const temp = dinosaurs.map(s => s);
    const indexToDel = temp.map(s => s._id).indexOf(id);
    console.log(indexToDel);

    temp.splice(indexToDel, 1);
    setDinosaurs(temp);
  }

  //Edit function goes here

  // const editDinosaur = (id)

  //Show function to add here



  return (
    <>
      <Header />
      <Buttons addDinosaur={addDinosaur} />
      <FlashcardBox dinosaurs={dinosaurs} removeDinosaur={removeDinosaur} /> {/*PASS down EDIT and SHOW*/}
    </>
  )
}

export default FlashCardGridContainer;