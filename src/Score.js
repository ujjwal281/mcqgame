import React from 'react';
import './Score.css';

function Score({ score, total }) {

  return (
    <div className="score-section">
        <div>
      You scored {score} out of {total}
        </div>
    </div>
  );
}

export default Score;
