import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '54365', name: 'Mary', age: 22 },
      { id: '33254', name: 'Max', age: 30 },
      { id: '2315464', name: 'Liv', age: 52 }
    ],
    personsShow: false
  }

  togglePersons = () => {
    this.setState({personsShow: !this.state.personsShow})
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  changePersonNameHandler = (event, index) => {
    const personsCopy = [...this.state.persons];
    personsCopy[index].name = event.target.value;

    this.setState({persons: personsCopy});
  }

  render() {
    let persons = null;

    if (this.state.personsShow) {
      persons = (
       <div>
         { this.state.persons.map((person, index) => {
           return <Person
                    name={person.name}
                    age={person.age} 
                    click={() => this.deletePersonHandler(index)}
                    key={person.id}
                    change={(e) => this.changePersonNameHandler(e, index)}/>
         }) }
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi there.</h1>
        <button onClick={this.togglePersons}>Toggle Persons</button>
        { persons }
      </div>
    );
  }
}

export default App;
