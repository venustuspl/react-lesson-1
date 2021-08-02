class ListItems extends React.Component {
  state = {
    items: ["jabłko", "sliwka", "gruszka"],
    cars: ["audi", "vw", "renault", "bmw"]
  }
  render() {
    return (
      <>
      <ul>
        {this.state.items.map(item => <li key={item}>{`owoc ${item}`}</li>)}
      </ul>
      <ul>
        {this.state.cars.map(car => <li key={car}>{`car ${car}`}</li>)}
      </ul>
      </>
    )
  }
}

ReactDOM.render(<ListItems />, document.getElementById('root'))
