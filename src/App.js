import React, {  useState } from 'react';
import Question from './Question';
import Score from './Score';
import './App.css';

const questions = [
  {
    questionText: '1. What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: '2. Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: '3. Who is capital of india',
    answerOptions: [
      { answerText: 'New Delhi', isCorrect: false },
      { answerText: 'Delhi', isCorrect: true },
      { answerText: 'Paschim Vihar', isCorrect: false },
      { answerText: 'Delhi NCR ', isCorrect: false },
    ],
  },
  // Add more questions here
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (<> 
      <div className='para'>
        <Score score={score} total={questions.length} />
        Refresh the page
      </div>
      </>
      ) : (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
}

export default App;
