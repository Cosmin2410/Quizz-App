import React from 'react';

function Questions(props) {
  console.log(`%c ${props.correctAnswer}`, 'color: blue; ');

  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: props.value }} />
      <div className="answers">
        <p dangerouslySetInnerHTML={{ __html: props.shuffle[0] }} />
        <p dangerouslySetInnerHTML={{ __html: props.shuffle[1] }} />
        <p dangerouslySetInnerHTML={{ __html: props.shuffle[2] }} />
        <p dangerouslySetInnerHTML={{ __html: props.shuffle[3] }} />
      </div>
    </div>
  );
}

export default Questions;
