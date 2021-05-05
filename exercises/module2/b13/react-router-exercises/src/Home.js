import React from "react";
import { Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        Conteúdo da HOME
        <Link to="/About">Ir para About</Link>
        
      </div>
    );
  }
}

export default App;
