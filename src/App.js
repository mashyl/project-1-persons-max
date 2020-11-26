import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Mary', age: 22 },
      { name: 'Max', age: 30 },
      { name: 'Liv', age: 52 }
    ],
    personsShow: false
  }

  togglePersons = () => {
    this.setState({personsShow: !this.state.personsShow})
  };

  nameChangedHandler = (event) => {
    console.log(event.target)
  }

  render() {
    let persons = null;

    if (this.state.personsShow) {
      persons = (
       <div>
         { this.state.persons.map(person => {
           return <Person
                    name={person.name}
                    age={person.age} />
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
