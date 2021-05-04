import React, { Component } from "react";

class DadJoke extends Component {
  constructor() {
    super();

    this.renderJokeElement = this.renderJokeElement.bind(this);
    this.saveJoke = this.saveJoke.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    };
  }

  async fetchJoke() {
    this.setState({
      loading: true,
    }, async () => {
      const requestHeaders = { headers: { accept: "application/json" } };
      const requestReturn = await fetch(
        "https://icanhazdadjoke.com/",
        requestHeaders
      );
      const requestObject = await requestReturn.json();
      this.setState({
        jokeObj: requestObject,
        loading: false,
      })
    });
  }

  componentDidMount() {
    this.fetchJoke();
  }

  async saveJoke() {
    const {
      jokeObj: { joke, id },
    } = this.state;
    this.setState((oldState) => ({
      storedJokes: [...oldState.storedJokes, { id, joke }],
    }));
    this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar piada!
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes, loading } = this.state;
    const loadingElement = <span>Loading...</span>;
    return (
      <div>
        <div>
          <div>Renderização Condicional</div>
          {storedJokes.map(({ id, joke }) => (
            <p key={id}>{joke}</p>
          ))}
        </div>
        <p>{loading ? loadingElement :  this.renderJokeElement()}</p>
      </div>
    );
  }
}

export default DadJoke;
