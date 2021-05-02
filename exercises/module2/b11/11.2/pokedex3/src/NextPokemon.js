import React from 'react';

class NextPokemon extends React.Component {

  render() {
    const { nextPokemon, index } = this.props;
    return (
      <button onClick={() => {nextPokemon(index)}}>Próximo Pokemon</button>
    )
  }
}

export default NextPokemon;