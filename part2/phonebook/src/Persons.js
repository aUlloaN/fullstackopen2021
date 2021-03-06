import React from 'react';

const Person = ({ person, handleDelete }) => {
  return (
    <p>{person.name} {person.number} <button onClick={handleDelete}>Delete</button></p>
  );
};

const Persons = ({ persons, handleDelete }) => {
  return (
    <div>
      {persons.map(person => (
        <Person
          key={person.name}
          person={person}
          handleDelete={() => handleDelete(person)}
        />
      ))}
    </div>
  );
};

export default Persons;