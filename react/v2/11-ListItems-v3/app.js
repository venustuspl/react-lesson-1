const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
    },
    {
      id: 4,
      age: 24,
      name: "Karol",
    }
  ],
  cars: [
    {
      id: 1,
      year: 2018,
      brand: "audi",
    },
    {
      id: 2,
      year: 2019,
      brand: "mercedes",
    },
    {
      id: 3,
      year: 2016,
      brand: "bmw",
    }
  ]
}


const Item = ({ user }) => (
  <div>
    <h1>Użytkownik {user.name}</h1>
    <h2>Ma {user.age}</h2>
  </div>
)

const CarItem = ({ item }) => (
  <div>
    <h1>Auto {item.brand}</h1>
    <h1>Jest z  {item.year} roku</h1>
  </div>
)

class ListItems extends React.Component {

  render() {
    const users = this.props.data.users
    const Items = users.map(user => <Item key={user.id} user={user} />)
    const cars = this.props.data.cars
    const CarItems = cars.map(car => <CarItem key={car.id} item={car} />)

    return (
      <React.Fragment>
      <ul>
        {Items}
      </ul>
      <ul>
        {CarItems}
      </ul>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root'))
