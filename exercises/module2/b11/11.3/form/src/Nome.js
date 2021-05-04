import React from 'react';

class Nome extends React.Component {
  render() {
    const { nome, handleChange } = this.props;
    return (
      <label>
      Nome
        <input name="nome" value={nome} onChange={handleChange} type="text"></input>
      </label>
    )
  }
}

export default Nome;