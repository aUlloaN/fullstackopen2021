import React from 'react';

const Header = ({course}) => {
	return (
		<h1>{course}</h1>
	);
};

const Content = ({parts}) => {
	return (
		<div>
			{
				parts.map((part, i) =>
					<Part key={i} name={part.name} exercises={part.exercises} />
				)
			}
		</div>
	);
};

const Part = ({name, exercises}) => {
  return (
    <p>{name} {exercises}</p>
  );
};

const Total = ({parts}) => {
	const total = parts.reduce((total, part) => total + part.exercises, 0);

	return (
		<p>Number of exercises {total}</p>
	);
};

const App = () => {
	const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />
			<Total parts={parts} />
		</div>
	)
}

export default App;