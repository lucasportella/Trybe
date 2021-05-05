import React from "react";
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
            <Home />
      </BrowserRouter>
    );
  }
}

export default App;
