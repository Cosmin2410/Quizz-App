import React, { useState, useEffect } from 'react';
import Questions from './Questions';
// import Answers from './Answers';

function App() {
  const [apiQues, setApiQues] = useState([]);
  const [nextQues, setNextQues] = useState(
    'https://opentdb.com/api.php?amount=1&category=18&type=multiple'
  );

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=1&category=18&type=multiple')
      .then((res) => res.json())
      .then((data) => setApiQues(data.results));
  }, [nextQues]);

  console.log(true);

  const getQuestions = apiQues.map((ques) => {
    // Shuffle answers

    let shuffle = [ques.correct_answer, ...ques.incorrect_answers].sort(
      () => Math.random() - 0.5
    );

    return (
      <Questions
        key={ques.question}
        value={ques.question}
        // incorrectAnswers={ques.incorrect_answers}
        correctAnswer={ques.correct_answer}
        shuffle={shuffle}
      />
    );
  });

  return (
    <div className="quizz-app">
      {getQuestions}
      <button onClick={setNextQues}>click</button>
    </div>
  );
}

export default App;
