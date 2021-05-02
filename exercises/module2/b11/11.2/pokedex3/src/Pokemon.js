import React from "react";
import pokemons from "./data";

class Pokemon extends React.Component {
  allPokemons = pokemons;
  // firePokemons = pokemons.filter((pokemon) => pokemon.type === "Fire");
  // psychicPokemons = pokemons.filters((pokemon) => pokemon.type === "Psychic");

  render() {
    const { listType, index } = this.props;
    const { id, name, type, averageWeight, image, moreInfo } = pokemons[index];

    return <div>{name}</div>;
  }
}

export default Pokemon;
