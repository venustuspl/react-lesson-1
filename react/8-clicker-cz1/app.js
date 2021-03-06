class Counter extends React.Component {

  state = {
    count: 0,
    result: this.props.result
  }

  handleMathClick(type, number = 1) {
     //debugger
    if (type === "subtraction") {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: prevState.result - number
      }))
    } else if (type === "reset") {
      this.setState(prevState => (
        {
          count: prevState.count + 1,
          result: this.props.result
        }
      ))
    } else if (type === "addition") {
      this.setState(prevState => (
        {
          count: prevState.count + 1,
          result: prevState.result + number
        }
      ))
    } else if (type === "multiply"){
        this.setState(prevState => (
        {
        result: prevState.result * 3
        }
        ))
    }

  }
  render() {
    return (
      <>
        <button onClick={this.handleMathClick.bind(this, "subtraction", 10)}>-10</button>
        <button onClick={() => this.handleMathClick("subtraction", 1)}>-1</button>
        <button onClick={this.handleMathClick.bind(this, "reset")}>Reset Wyniku</button>
        <button onClick={this.handleMathClick.bind(this, "multiply")}> Wynik x 3 </button>
        <button onClick={this.handleMathClick.bind(this, "addition", 1)}>+1</button>
        <button onClick={this.handleMathClick.bind(this, "addition", 10)}>+10</button>
        <h1>Liczba kliknięć: {this.state.count}</h1>
        <h1>Wynik: {this.state.result}</h1>
      </>
    )
  }

}

const startValue = 10;
ReactDOM.render(<Counter result={startValue} />, document.getElementById('root'))
