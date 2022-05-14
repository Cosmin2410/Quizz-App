import React from 'react';

function Questions(props) {
  // Shuffle answers

  // function shuffle() {
  //   const answers = document.querySelectorAll('.answer');
  //   answers.forEach((answer) => {
  //     let randomNum = Math.floor(Math.random() * 4);
  //     answer.style.order = randomNum;
  //   });
  // }

  let shuffle = [props.correctAnswer, ...props.incorrectAnswers];
  console.log(shuffle);

  shuffle = shuffle.sort(() => Math.random() - 0.5);
  console.log(shuffle);

  // dangerouslySetInnerHTML={{ __html: props.correctAnswer }}
  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: props.value }} />
      <div className="answers">
        <button className="answer">{shuffle[0]}</button>
        <button className="answer">{shuffle[1]}</button>
        <button className="answer">{shuffle[2]}</button>
        <button className="answer">{shuffle[3]}</button>
      </div>
    </div>
  );
}

export default Questions;
