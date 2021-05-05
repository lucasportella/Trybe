import React from "react";
import About from "./About";
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        Conteúdo da HOME
        <Route path="/about" component={About}></Route>
      </div>
    );
  }
}
export default App;
