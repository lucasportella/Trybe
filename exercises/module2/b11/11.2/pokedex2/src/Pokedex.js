import React from "react";
import data from "./data";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    const { pokemonNumber, firePokemons } = this.props;
    const pokemon = data[pokemonNumber];
    return (
      <div>
          <div className="Border">
            <Pokemon key={pokemon.id} pokemon={pokemon}></Pokemon>
          </div>    
      </div>
    );
  }
}

export default Pokedex;
