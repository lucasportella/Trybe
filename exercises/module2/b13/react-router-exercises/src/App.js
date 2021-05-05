import React from "react";
import Home from './Home';
import About from "./About";
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
    <Route exact path="/" component={Home}></Route>
      <Route path="/about/:sparta" render={(props) => <About {...props} minhaProp="spartaaaa"/>}></Route>
      </BrowserRouter>
    );
  }
}

export default App;
