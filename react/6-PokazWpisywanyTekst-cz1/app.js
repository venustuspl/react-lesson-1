class App extends React.Component {
  state = {
    value: ""
  }

  handleInputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value
    })
  }

  handleResetClick = () => {
    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <React.Fragment>
        <input value={this.state.value} placeholder="wpisz..." onChange={this.handleInputChange} type="text" />
        <button onClick={this.handleResetClick}>Reset</button>
        <h1 className="title">{this.state.value.toUpperCase()}</h1>
      </React.Fragment>
    )
  }
}

class MyApp extends React.Component {

  state = {
    value: ""
  }

  handleInputChange = (e) => {
    this.setState(
      {
        value: e.target.value
      }
    )
  }

  handleResetClick = () => {
    this.setState(
      {
        value: ""
      }
    )
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" value={this.state.value} placeholder="Wpisz coś" onChange={this.handleInputChange}  />
        <button onClick={this.handleResetClick}>Reset</button>
        <h4 className="title">{this.state.value.toLowerCase()}</h4>
      </React.Fragment>
    )     
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<MyApp />, document.getElementById('myroot'))