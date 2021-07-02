class Counter extends React.Component {

  state = {
    count: 0,
    result: this.props.result
  }

  handleMathClick = (type, number = 1) => {
    // debugger
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
    this.setState(
    prevState => ({
    cont: prevState.count + 1,
    result: prevState.result * number
    }
    ))
    }

  }
  render() {
    return (
      <>
        <MyMathButton
          name="-10*3"
          number="10"
          type="subtraction"
          click={this.handleMathClick}
        />
        <MathButton
          name="-1"
          number="1"
          type="subtraction"
          click={this.handleMathClick}
        />

        <MathButton
          name="reset"
          type="reset"
          click={this.handleMathClick}
        />

        <MyMathButton
          name="*3"
          number="1"
          type="multiply"
          click={this.handleMathClick}
        />

        <MyMathButton
            name="*10"
            number="10"
            type="multiply"
            click={this.handleMathClick}
            />

        <MathButton
          name="+10"
          number="10"
          type="addition"
          click={this.handleMathClick}
        />
        <h1>Liczba kliknięć: {this.state.count}</h1>
        <h1>Wynik: {this.state.result}</h1>
      </>
    )
  }

}

const MathButton = (props) => {
  const number = parseInt(props.number)
  return (
    <button onClick={() => props.click(props.type, number)}>{props.name}</button>
  )
}

const MyMathButton = (props) => {
    const number = parseInt(props.number)
    return (
    <button onClick={() => props.click(props.type, number * 3)}> {props.name} </button>
    )
}

const startValue = 0;
ReactDOM.render(<Counter result={startValue} />, document.getElementById('root'))
