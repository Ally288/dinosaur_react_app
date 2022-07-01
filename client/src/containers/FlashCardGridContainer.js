import React, {useState, useEffect} from 'react';
import Buttons from '../components/Buttons';
import Header from '../components/Header';
import FlashcardBox from '../components/FlashcardBox';
import { getDinosaurs } from '../services/services';

const FlashCardGridContainer = () => {
    
    const [dinosaurs, setDinosaurs] = useState([])

    useEffect(()=>{
        getDinosaurs().then((allDinosaurs)=>{
          setDinosaurs(allDinosaurs);
        })
      }, []);


    const addDinosaur = (dinosaur) =>{
        const temp = dinosaurs.map(s =>s);
        temp.push(dinosaur);
        setDinosaurs(temp);
      }

      

    return (
        <>
            <Header />
            <Buttons />
            <FlashcardBox />
        </>
    )
}

export default FlashCardGridContainer