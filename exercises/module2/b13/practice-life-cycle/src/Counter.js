import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("construtor");
  }


  componentDidMount() {
    this.setState({ counter: 10 });}

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.counter >= 13 && nextState.counter < 16) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
  }

     render() {
      console.log("render");
      return (
        <div>
          <p>Contador</p>
          <button
            onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
          >
            Soma
          </button>
          <p>{this.state.counter}</p>
        </div>
      );
    }
  }

export default Counter;
