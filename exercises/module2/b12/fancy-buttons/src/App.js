import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.click = this.click.bind(this);
    this.state = {
      numeroCliques: 0
    }
  }
    click() {
      this.setState((estadoAnterior, _props) => ({
        numeroCliques: estadoAnterior.numeroCliques + 1
      }
      ))
      console.log(this)
  }
  render() {
    return <div>
      <button onClick={() => this.click()}>{this.state.numeroCliques}</button>
    </div>
  }
}

export default App;
