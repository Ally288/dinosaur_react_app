import React, { useState } from 'react'
import './MainContainer.css'

const MainContainer = () => {

    const [flipAlly, setFlipAlly] = useState(false);
    const [flipIan, setFlipIan] = useState(false);
    const [flipJonny, setFlipJonny] = useState(false);


    const spinAlly = () => {
        setFlipAlly(!flipAlly)
    };

    const spinIan = () => {
        setFlipIan(!flipIan)
    };

    const spinJonny = () => {
        setFlipJonny(!flipJonny)
    };



    return (

        <>
            <main className="about">

                <h2>Our App</h2>
                <p>Click on the buttons above to learn about all the different types of dinosaurs and test your knowledge.</p>
                <p>This app was created during five days in July 2022 as part of our group project in the CodeClan Professional Software Development course. The technologies used include Javascript, React, Express and Mongodb.</p>

                <h2>Our brief</h2>
                <p>The BBC are looking to improve their online offering of educational content by developing some interactive browser applications that display information in a fun and interesting way.</p>
                <p>Your task is to make an a Minimum Viable Product or prototype to put forward to them - this may only be for a small set of information, and may only showcase some of the features to be included in the final app.</p>

            </main>

            <section className="bio">
                <div className={`card ${flipAlly ? 'flipally' : ''}`}>
                    <div className="front">
                        <img className="dinopic" src="/images/allosaurus.png" alt="Allosaurus" />
                        <h1>Allosaurus</h1>
                        <p className="title">Scrum Daddy Ally</p>
                        <a href="https://www.linkedin.com/in/alisdairsit/"><i className="fa fa-linkedin icon"></i></a>
                        <a href="https://github.com/Ally288"><i className="fa fa-github icon"></i></a>
                        <p><button onClick={spinAlly} className="biobtn">Spin me</button></p>
                    </div>
                    <div className="back" >
                        <img className="profpic" src="/images/allypic.png" height="200px" alt="Ally's Picture" />
                        <h1>Alisdair Sit</h1>
                        <a href="https://www.linkedin.com/in/alisdairsit/"><i className="fa fa-linkedin icon"></i></a>
                        <a href="https://github.com/Ally288"><i className="fa fa-github icon"></i></a>
                        <p><button onClick={spinAlly} className="biobtn">Spin me</button></p>
                    </div>
                </div>
                <div className={`card ${flipIan ? 'flipian' : ''}`}>
                    <div className="front">
                        <img className="dinopic" src="/images/triceratops.png" alt="Triceratops" />
                        <h1>Triceratops</h1>
                        <p className="title">One-eyed Ian</p>
                        <a href="https://www.linkedin.com/in/ian-wlodarczyk-1578498a/"><i className="fa fa-linkedin icon"></i></a>
                        <a href="https://github.com/ianflod"><i className="fa fa-github icon"></i></a>
                        <p><button onClick={spinIan} className="biobtn">Spin me</button></p>
                    </div>
                    <div className="back">
                        <img className="profpic" src="/images/ianpic.jpg" height="200px" alt="Ian's Picture" />
                        <h1>Ian Wlodarczyk</h1>
                        <a href="https://www.linkedin.com/in/ian-wlodarczyk-1578498a/"><i className="fa fa-linkedin icon"></i></a>
                        <a href="https://github.com/ianflod"><i className="fa fa-github icon"></i></a>
                        <p><button onClick={spinIan} className="biobtn">Spin me</button></p>
                    </div>
                </div>
                <div className={`card ${flipJonny ? 'flipjonny' : ''}`}>
                    <div className="front">
                        <img className="dinopic" src="/images/trex.png" alt="trex" />
                        <h1>Gigantosaurus</h1>
                        <p className="title">Big Jonny</p>
                        <a href="https://www.linkedin.com/in/jonathan-houdin-mcaveety-392a1153/"><i className="fa fa-linkedin icon"></i></a>
                        <a href="https://github.com/jonnyhoudini"><i className="fa fa-github icon"></i></a>
                        <p><button onClick={spinJonny} className="biobtn">Spin me</button></p>
                    </div>
                    <div className="back">
                        <img className="profpic" src="/images/jonny.jpg" height="200px" alt="Jonny's Picture" />
                        <h1>Jonny Houdin McAveety</h1>
                        <a href="https://www.linkedin.com/in/jonathan-houdin-mcaveety-392a1153/"><i className="fa fa-linkedin icon"></i></a>
                        <a href="https://github.com/jonnyhoudini"><i className="fa fa-github icon"></i></a>
                        <p><button onClick={spinJonny} className="biobtn">Spin me</button></p>
                    </div>
                </div>

            </section>


        </>


    )
}

export default MainContainer