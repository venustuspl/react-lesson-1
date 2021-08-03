
const Item = (props) => <li>{`owoc ${props.content}`}</li>
const Car = (props) => <ul> {`car ${props.content}`} </ul>

class ListItems extends React.Component {
  state = {
    items: ["jabłko", "sliwka", "gruszka"],
    cars: ["audi", "mercedes", "bmw"]
  }
  render() {

    const Items = this.state.items.map(item => <Item key={item} content={item} />)
    const Cars = this.state.cars.map(car => <Car key={car} content={car} />)

    return (
      <ul>
        {Items}
        {Cars}
      </ul>
    )
  }
}

ReactDOM.render(<ListItems />, document.getElementById('root'))
