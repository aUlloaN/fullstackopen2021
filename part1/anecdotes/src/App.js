import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];
  const initVotes = Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(initVotes);

  function nextAnecdote() {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  }

  function voteAnecdote() {
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    setVotes(copyVotes);
  }

  function getIndexMostVoted() {
    let index = 0;
    votes.reduce((prevValue, currentValue, currentIndex) => {
      if (currentValue > prevValue) {
        index = currentIndex;
        return currentValue;
      }

      return prevValue;
    });

    return index;
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => voteAnecdote()}>vote</button>
      <button onClick={() => nextAnecdote()}>next anecdote</button>
      <br></br>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[getIndexMostVoted()]}</p>
      <p>has {votes[getIndexMostVoted()]} votes</p>
    </div>
  );
};

export default App;
