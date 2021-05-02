import React from 'react';

class Button extends React.Component {
  constructor() {
    super()
  }


  render() {
    return (
      <button onClick={this.nextPokemon}>Próximo Pokemon</button>
    )
  }
}

export default Button;