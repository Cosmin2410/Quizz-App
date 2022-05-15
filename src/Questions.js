import React, { useState } from 'react';

function Questions(props) {
  console.log(`%c ${props.correctAnswer}`, 'color: blue; ');

  const [disable, setDisable] = useState(false);

  const correctAns = {
    backgroundColor: 'green',
  };

  const incorrectAns = {
    backgroundColor: 'red',
  };

  const checkAnswer = (e) => {
    e.target.innerText === props.correctAnswer
      ? console.log(true)
      : console.log(false);

    setDisable(true);
  };

  // dangerouslySetInnerHTML={{ __html: props.shuffle[0] }}

  // const styles = {
  //   color: 'red',
  // };

  // style={disable ? { color: 'blue' } : { color: 'green' }}

  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: props.value }} />
      <div className="answers">
        <button onClick={checkAnswer} className="btn" disabled={disable}>
          {props.shuffle[0]}
        </button>
        <button onClick={checkAnswer} className="btn" disabled={disable}>
          {props.shuffle[1]}
        </button>
        <button onClick={checkAnswer} className="btn" disabled={disable}>
          {props.shuffle[2]}
        </button>
        <button onClick={checkAnswer} className="btn" disabled={disable}>
          {props.shuffle[3]}
        </button>
      </div>
    </div>
  );
}

export default Questions;
