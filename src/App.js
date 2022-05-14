import React, { useState, useEffect } from 'react';
import Questions from './Questions';
import Answers from './Answers';

function App() {
  const [apiQues, setApiQues] = useState([]);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=1&category=18&type=multiple')
      .then((res) => res.json())
      .then((data) => setApiQues(data.results));
  }, []);

  const test = apiQues.map((ques) => (
    <Questions
      key={ques.question}
      value={ques.question}
      incorrectAnswers={ques.incorrect_answers}
      correctAnswer={ques.correct_answer}
    />
  ));

  // console.log(apiQues[0].incorrect_answers); .map((ans) => ans)

  return <div className="quizz-app">{test}</div>;
}

export default App;
