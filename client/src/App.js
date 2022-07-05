import { useState, useEffect } from 'react';
import MainContainer from "./containers/MainContainer";
<<<<<<< HEAD
import ReactPlayer from "react-player";
=======
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import FlashCardGridContainer from "./containers/FlashCardGridContainer";
import Quiz from "./containers/Quiz";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getDinosaurs, editDinosaur } from './services/services';
import './App.css';
import Popup from './components/Popup';
import FlashcardForm from './components/FlashcardForm';

>>>>>>> bd54e4376950c673c48c98d33c71b672ca6f825c

function App() {

  const [dinosaurs, setDinosaurs] = useState([]);
  const [formPopup, setFormPopup] = useState(false);


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

  return (
<<<<<<< HEAD
    <>      
    <ReactPlayer
    url="https://soundcloud.com/umesongs/jurassic-park-theme?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    />
    <MainContainer />
=======
    <>
      <Router>
        <Header />
        <Buttons addDinosaur={addDinosaur} setFormPopup={setFormPopup} />

        <Routes>
          <Route exact path="/" element={<MainContainer />} />
          <Route path="/dinosaurs" element={<FlashCardGridContainer dinosaurs={dinosaurs} setDinosaurs={setDinosaurs} formPopup={formPopup} addDinosaur={addDinosaur} />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<div className="container404"><h1>404 Page Not Found</h1><iframe width="560" height="315" src="https://www.youtube.com/embed/gmxQSwwTRqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>} />
        </Routes>

      </Router>

      <Popup trigger={formPopup} setTrigger={setFormPopup}>
        <FlashcardForm setFormPopup={setFormPopup} setDinosaurs={setDinosaurs} addDinosaur={addDinosaur} />
      </Popup>

>>>>>>> bd54e4376950c673c48c98d33c71b672ca6f825c
    </>
  );
}

export default App;