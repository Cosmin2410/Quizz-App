import React from 'react';

function Questions(props) {
  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: props.value }} />
      <div className="answers">
        <p dangerouslySetInnerHTML={{ __html: props.correctAnswer }} />
        <p dangerouslySetInnerHTML={{ __html: props.incorrectAnswers[0] }} />
        <p dangerouslySetInnerHTML={{ __html: props.incorrectAnswers[1] }} />
        <p dangerouslySetInnerHTML={{ __html: props.incorrectAnswers[2] }} />
      </div>
    </div>
  );
}

export default Questions;
