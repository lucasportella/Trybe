import React from 'react';
import Pokemon from './Pokemon';
import NextPokemon from './NextPokemon';


class Pokedex extends React.Component {
  constructor() {
    super()
    this.state = {
      listType: 'all',
      index: 0
    }

    this.nextPokemon = this.nextPokemon.bind(this);
    this.getSelectedList = this.getSelectedList.bind(this);

  }
  nextPokemon(value) {
      this.setState({
        index: value
      })
  }

  getSelectedList() {
    const selectedList = this.pokemons.filter((pokemon) => pokemon.type !== 'all')
  }

  render() {

    return (
    <div>
        <Pokemon listType={this.state.listType} index={this.state.index}/>
        <NextPokemon nextPokemon={this.nextPokemon} index={this.state.index}/>
    </div>
    )
  }
}

export default Pokedex;