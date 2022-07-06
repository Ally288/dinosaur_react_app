import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getDinosaurs, editDinosaur } from './services/services';
import MainContainer from "./containers/MainContainer";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import FlashCardGridContainer from "./containers/FlashCardGridContainer";
import Quiz from "./containers/Quiz";
import ChartContainer from "./containers/ChartContainer";
import Popup from './components/Popup';
import FlashcardForm from './components/FlashcardForm';
import './App.css';
import { Howl } from 'howler';


function App() {

  const [dinosaurs, setDinosaurs] = useState([]);
  const [formPopup, setFormPopup] = useState(false);
  const [asteroid, setAsteroid] = useState(true);


  useEffect(() => {
    getDinosaurs().then((allDinosaurs) => {
      setDinosaurs(allDinosaurs);
    })
  }, []);

  const soundSrc = "/tune/jp18.mp3"

  const playSound = (src) => {
    const sound = new Howl({ src });
    sound.play();
  };

  const addDinosaur = (dinosaur) => {
    const temp = dinosaurs.map(d => d);

    temp.push(dinosaur);
    setDinosaurs(temp);
  }

  const toggleAsteroid = () => {
    if (asteroid === true) {
      setAsteroid(false);
    } else {
      setAsteroid(true);
  }
}

  return (
    <>
    {asteroid ? <div className='dino-container'>
      <Router>
        <img className="sound" onClick={() => playSound(soundSrc)} alt="play" src="/images/play.png" />
        <Header />
        <Buttons addDinosaur={addDinosaur} setFormPopup={setFormPopup} />
        <Routes>
          <Route exact path="/" element={<MainContainer />} />
          <Route path="/dinosaurs" element={<FlashCardGridContainer dinosaurs={dinosaurs} setDinosaurs={setDinosaurs} formPopup={formPopup} addDinosaur={addDinosaur} />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/chart" element={<ChartContainer />} />
          <Route path="*" element={<div className="container404"><h1>404 - You've chosen the wrong path </h1><iframe width="560" height="315" src="https://www.youtube.com/embed/gmxQSwwTRqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>} />
        </Routes>
      </Router>
      <Popup trigger={formPopup} setTrigger={setFormPopup}>
        <FlashcardForm setFormPopup={setFormPopup} setDinosaurs={setDinosaurs} addDinosaur={addDinosaur} />
      </Popup>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="btn-frame">
          <div className='btn-inner-frame'>
            <button className="toggle-btn-show" onClick={toggleAsteroid}>Let Nature Take Its Course</button>
          </div>
        </div>
      </div> :

    <div className='dino-container'>
      <button className='toggle-btn-save' onClick={toggleAsteroid}>Save the Dinosaurs!</button>
      <Router>
        <img className="sound" onClick={() => playSound(soundSrc)} alt="play" src="/images/play.png" />
        <div className='asteroid'>
          <a href="https://www.google.co.uk">
          <img width="100px" src="/images/asteroid.png" alt="asteroid" />
          </a>
        </div>
        <Header />
        <Buttons addDinosaur={addDinosaur} setFormPopup={setFormPopup} />
        <Routes>
          <Route exact path="/" element={<MainContainer />} />
          <Route path="/dinosaurs" element={<FlashCardGridContainer dinosaurs={dinosaurs} setDinosaurs={setDinosaurs} formPopup={formPopup} addDinosaur={addDinosaur} />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/chart" element={<ChartContainer />} />
          <Route path="*" element={<div className="container404"><h1>404 - You've chosen the wrong path </h1><iframe width="560" height="315" src="https://www.youtube.com/embed/gmxQSwwTRqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>} />
        </Routes>
      </Router>
      <Popup trigger={formPopup} setTrigger={setFormPopup}>
        <FlashcardForm setFormPopup={setFormPopup} setDinosaurs={setDinosaurs} addDinosaur={addDinosaur} />
      </Popup>
      </div>}
    </>
  );
}

export default App;