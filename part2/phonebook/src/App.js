import React, { useState } from 'react';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ textFilter, setTextFilter ] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleTextFilterChange = (event) => {
    setTextFilter(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    };
    const personFound = persons.find(person => person.name.trim() === personObject.name.trim());
    if (personFound) {
      alert(`${personFound.name} is already added to phonebook`);
    } else {
      setPersons(persons.concat(personObject));
    }
    setNewName('');
    setNewNumber('');
  };

  const personsToShow = textFilter.trim().length > 0
    ? persons.filter(person => person.name.toLowerCase().indexOf(textFilter.trim().toLowerCase()) > -1)
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={textFilter} onChange={handleTextFilterChange} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  );
};

export default App;
