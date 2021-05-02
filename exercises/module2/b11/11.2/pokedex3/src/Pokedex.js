import React from 'react';
import Pokemon from './Pokemon'


class Pokedex extends React.Component {
  constructor() {
    super()
    this.state = {
      listType: 'all',
      index: 0
    }
  }

  render() {
    return (
      <Pokemon listType={this.state.listType} index={this.state.index}/>
    )
  }
}

export default Pokedex;