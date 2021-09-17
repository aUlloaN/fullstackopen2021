import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
import PersonService from './services/persons';

const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ textFilter, setTextFilter ] = useState('');

  useEffect(() => {
    PersonService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      })
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleTextFilterChange = (event) => {
    setTextFilter(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    };
    const personFound = persons.find(person => person.name.trim() === personObject.name.trim());
    if (personFound) {
      const resp = window.confirm(`${personFound.name} is already added to phonebook. Replace the old number with a new one?`);
      if (resp) {
        PersonService
          .update(personFound.id, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== personFound.id ? person : returnedPerson));
            setNewName('');
            setNewNumber('');
          })
      }
    } else {
      PersonService
        .create(personObject)
        .then(newPerson => {
          setPersons(persons.concat(newPerson));
          setNewName('');
          setNewNumber('');
        });
    }
  };

  const deletePerson = (data) => {
    const resp = window.confirm(`Delete ${data.name}?`);
    if (resp) {
      PersonService
        .delete(data.id)
        .then(() => {
          window.alert(`${data.name} was eliminated.`);
          setPersons(persons.filter(person => person.id !== data.id));
        })
    }
  }

  const personsToShow = textFilter.trim().length > 0
    ? persons.filter(person => person.name.toLowerCase().indexOf(textFilter.trim().toLowerCase()) > -1)
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter text={textFilter} handleChange={handleTextFilterChange} />
      <h2>Add a new</h2>
      <PersonForm
        name={newName}
        number={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={addPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} handleDelete={deletePerson} />
    </div>
  );
};

export default App;
