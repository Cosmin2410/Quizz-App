import React, { useState, useEffect } from 'react';

function App() {
  const [apiQues, setApiQues] = useState('');

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
      .then((res) => res.json())
      .then((data) => setApiQues(data.results));
  }, []);

  return <div className="quizz-app"></div>;
}

export default App;
