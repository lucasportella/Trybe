import React from 'react';

class EstadoFavorito extends React.Component {
  render() {
    const { value, handleChange, handleErrors } = this.props
    let error = undefined;
    let boolean = false;
    if (value.length > 100) { 
      error = 'Texto muito grande!';
      boolean = true;
    }
    return (
      <label>
      Estado favorito
      <textarea name="estadoFavorito"  type="text" value={value} onChange={handleChange}></textarea><span>{error ? error : ''}</span>
    </label>
    )
  }
}

export default EstadoFavorito;