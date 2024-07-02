import React from 'react';
import './Question.css';

function Question({ question, onAnswerClick }) {
  return (
    <div className="question-section">
      <div className="question-text">{question.questionText}</div>
      <div className="answer-section">
        {question.answerOptions.map((option, index) => (
          <button className='button1' key={index} onClick={() => onAnswerClick(option.isCorrect)}>
            {option.answerText}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
