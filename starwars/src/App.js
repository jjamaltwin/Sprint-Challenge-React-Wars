import React, { Component } from 'react';
import './App.css';
import Characters from './components/StarWarsCharacter';


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    }
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    console.log(this.state);
    let starwarsChars = this.state.starwarsChars

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {starwarsChars.map(starwarsChars => 
        <Characters key={starwarsChars.name} characters={starwarsChars} /> )}
         <Characters key={starwarsChars.mass} characters={starwarsChars} /> )}
         <Characters key={starwarsChars.gender} characters={starwarsChars} /> )}
         <Characters key={starwarsChars.height} characters={starwarsChars} /> )}
         <Characters key={starwarsChars.eye_color} characters={starwarsChars} /> )}
      </div>
    );
  }
}

export default App;
