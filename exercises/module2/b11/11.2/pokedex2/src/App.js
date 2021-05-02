import "./App.css";
import Pokedex from "./Pokedex";
import Button from "./Button";
import React from "react";
import pokemons from "./data";

class App extends React.Component {
  constructor() {
    super();
    this.nextPokemon = this.nextPokemon.bind(this);
    this.state = {
      pokemonNumber: 0,
      filter: 'all',
    };
  }

  nextPokemon(filter) {
    this.setState((updater, _props) => (
      {...updater, pokemonNumber: (updater.pokemonNumber + 1) % filter.length,}
    ));
  }
 

  render() {
    const firePokemons = pokemons.filter((pokemon) => pokemon.type === 'Fire');
    return (
      <div>
        <Pokedex filter={this.state.filter} pokemonNumber={this.state.pokemonNumber}/>
        <button type="button" onClick={() => this.nextPokemon(pokemons)}>Next Pokemon</button>
        <button type="button" onClick={() => this.nextPokemon(firePokemons)}>Fire</button>
      </div>
    );
  }
}
export default App;
