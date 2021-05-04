// App.js
import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
    }
    this.fetchCharacters = this.fetchCharacters.bind(this);
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  renderCharacter({ name, image, id }) {
    return (
      <div className="container" key={name}>
      <h3>{name}</h3>
      <img src={image} alt={name}/>
    </div>
    )
  }

  render() {
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {this.state.characters.map((character) => this.renderCharacter(character))}
        </div>
      </div>
    );
  }
}

export default App;