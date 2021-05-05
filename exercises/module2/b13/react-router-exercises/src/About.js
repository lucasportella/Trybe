import React from "react";
import { Link } from 'react-router-dom'

class App extends React.Component {
  render() {
    return(
      <div>
        conteúdo do About
        {this.props.match.params.sparta}
        <Link to="/">Ir para Home</Link>
      </div>
    )
  }
}

export default App;
