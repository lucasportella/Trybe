import './App.css';
import React from 'react';
import EstadoFavorito from './EstadoFavorito';
import Nome from './Nome';
import VaiComparecer from './VaiComparecer'

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.handleErrors = this.handleErrors.bind(this)

    this.state = {
      estadoFavorito: '',
      nome: '',
      vaiComparecer: false,
      formularioComErros: false,
    }
  }

  handleErrors(boolean) {
    console.log('exeuctei')
    this.setState({
      formularioComErros: boolean,
    })
  }

  handleChange({ target }) {
    const {name} = target;
    const value = target.type === 'checkbox' ? target.checked : target.value

  this.setState({
    [name]: value,
  })

  }


  render() {
    return (
      <div>
        <h1>Estados</h1>
        <fieldset>
        <form>
          <EstadoFavorito handleErrors={this.handleErrors} handleChange={this.handleChange} value={this.state.estadoFavorito}/>
        <Nome value={this.state.nome} handleChange={this.handleChange}/>
        <VaiComparecer handleChange={this.handleChange} value={this.state.vaiComparecer}/>
        </form>
        </fieldset>
      </div>
    )
  }
 

}

export default App;
