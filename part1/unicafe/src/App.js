import React, { useState } from 'react';

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ feedback }) => {
  const {good, neutral, bad} = feedback;
  const hasFeedback = good > 0 || neutral > 0 || bad > 0;
  
  if (!hasFeedback) {
    return (
      <p>No feedback given</p>
    );
  }

  const total = good + neutral + bad;
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / total;
  const positive = (good / total) * 100;

  return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={total} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={`${positive} %`} />
      </tbody>
    </table>
  );
};

const App = () => {
  const initFeedback = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  const [feedback, setFeedback] = useState(initFeedback);

  const handleGoodClick = () => setFeedback({...feedback, good: feedback.good + 1});
  const handleNeutralClick = () => setFeedback({...feedback, neutral: feedback.neutral + 1});
  const handleBadClick = () => setFeedback({...feedback, bad: feedback.bad + 1});

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <Statistics feedback={feedback} />
    </div>
  )
};

export default App;
