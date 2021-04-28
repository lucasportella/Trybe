import React from "react";
import data from "./data";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    return (
      <div>
        {data.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon}></Pokemon>
        ))}
      </div>
    );
  }
}

export default Pokedex;
