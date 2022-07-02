import React, { useState, useEffect } from 'react';
import Buttons from '../components/Buttons';
import Header from '../components/Header';
import FlashcardBox from '../components/FlashcardBox';
import { getDinosaurs } from '../services/services';
import Popup from '../components/Popup';
import FlashcardForm from '../components/FlashcardForm';

const FlashCardGridContainer = () => {

  const [dinosaurs, setDinosaurs] = useState([])
  const [formPopup, setFormPopup] = useState(false);

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
      <Buttons addDinosaur={addDinosaur} setFormPopup={setFormPopup} />
      <FlashcardBox dinosaurs={dinosaurs} removeDinosaur={removeDinosaur} /> {/*PASS down EDIT and SHOW*/}
      <Popup trigger={formPopup} setTrigger={setFormPopup}>
        <h3>My popup</h3>
        <p> This is where the form will go</p>
        <FlashcardForm />
      </Popup>
    </>
  )
}

export default FlashCardGridContainer;