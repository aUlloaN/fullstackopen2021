import React, { useState } from 'react';

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / total;
  const positive = (good / total) * 100;

  return [
      <p>good {good}</p>,
      <p>neutral {neutral}</p>,
      <p>bad {bad}</p>,
      <p>All {total}</p>,
      <p>average {average}</p>,
      <p>positive {positive}%</p>
  ];
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
};

export default App;
