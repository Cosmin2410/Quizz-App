import React, { useState, useEffect } from 'react';
import Questions from './Questions';
import Answers from './Answers';

function App() {
  const [apiQues, setApiQues] = useState([]);
  // const [changeQuiz, setChangeQuiz] = useState(0);

  // const test = console.log(true);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=1&category=18&type=multiple')
      .then((res) => res.json())
      .then((data) => setApiQues(data.results));
  }, []);

  const getQuestions = apiQues.map((ques) => (
    <Questions
      key={ques.question}
      value={ques.question}
      incorrectAnswers={ques.incorrect_answers}
      correctAnswer={ques.correct_answer}
    />
  ));

  return (
    <div className="quizz-app">
      {getQuestions}
      <button>click</button>
    </div>
  );
}

export default App;
