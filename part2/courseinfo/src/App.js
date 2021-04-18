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

const Course = ({course}) => {
  return [
    <Header key="header" course={course.name} />,
    <Content key="content" parts={course.parts} />
  ];
};

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  };

	return (
		<Course course={course} />
	);
};

export default App;