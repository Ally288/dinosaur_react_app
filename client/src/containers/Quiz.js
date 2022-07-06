import React, { useState } from 'react'
import './Quiz.css'

const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [
        {
            questionText: 'Why did dinosaurs go extinct?',
            answerOptions: [
                { answerText: 'They stopped having babies', isCorrect: false },
                { answerText: 'Veganism', isCorrect: false },
                { answerText: 'The cost of living crisis', isCorrect: false },
                { answerText: 'They were hit by an asteroid', isCorrect: true },
            ],
        },
        {
            questionText: 'What are Oviraptors also known as?',
            answerOptions: [
                { answerText: 'Big reptiles', isCorrect: false },
                { answerText: 'Scary lizards', isCorrect: false },
                { answerText: 'Egg thiefs', isCorrect: true },
                { answerText: 'Omelette burglar', isCorrect: false },
            ],
        },
        {
            questionText: 'Where did the T Rex live?',
            answerOptions: [
                { answerText: 'Maryhill', isCorrect: false },
                { answerText: 'North America', isCorrect: true },
                { answerText: 'Drumchapel', isCorrect: false },
                { answerText: 'Easterhouse', isCorrect: false },
            ],
        },
        {
            questionText: 'Which of these dinosaurs had three horns?',
            answerOptions: [
                { answerText: 'Triceratops', isCorrect: true },
                { answerText: 'Stegasaurus', isCorrect: false },
                { answerText: 'Velociraptor', isCorrect: false },
                { answerText: 'Diplodocus', isCorrect: false },
            ],
        },
    ];

    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        const nextQuestionNumber = currentQuestionNumber + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setCurrentQuestionNumber(nextQuestionNumber);
        } else {
            setShowScore(true);
        }
    }

    return (
        <div className="quizContainer">
            <div className='app'>
                {showScore ? (
                    <div className='score-section'><p>You scored {score} out of {questions.length}</p></div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestionNumber}</span> of {questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                <button className="quiz-button" onClick={() => handleAnswerButtonClick(answerOption.isCorrect)} key={index}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Quiz