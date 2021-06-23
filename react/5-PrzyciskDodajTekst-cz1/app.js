//Przycisk - po kliknięciu dodawana jest litera do tekstu
class App extends React.Component {

  state = {
    text: "",
    number: 2
  }

  handleClickA = () => {
    // this.state.text += "a";
    // console.log(this.state.text);

    const letterA = "a"
    this.setState({
      text: this.state.text + letterA
    })
  }

  handleClickB = () => {
    const letterB = "b"
    this.setState(
      {
        text: this.state.text + letterB
      }
    )
  }

  handleClickClear = () => {
    this.setState(
      {
        text : ""
      }
    )
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleClickA}>Dodaj "A"</button>
        <button onClick={this.handleClickB}>Dodaj "B"</button>
        <button onClick={this.handleClickClear}> Wyczyść </button>
        <h1>{this.state.text}</h1>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))