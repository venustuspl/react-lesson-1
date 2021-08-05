const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male",
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
      sex: "female",
    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
      sex: "female",
    },
    {
      id: 4,
      age: 24,
      name: "Karol",
      sex: "male",
    }
  ],
  cars: [
    {
      id: 1,
      year: 2018,
      brand: "audi",
      engine: "diesel",
    },
    {
      id: 2,
      year: 2019,
      brand: "mercedes",
      engine: "petrol",
    },
    {
      id: 3,
      year: 2016,
      brand: "bmw",
      engine: "petrol",
    }
  ]
}

const Item = ({ user }) => (
  <div className="userInfo">
    <h1>{user.name}</h1>
    <p>Informacje o użytkowniku</p>
    <p>Wiek użytkownika: <strong>{user.age}</strong></p>
    <p>Płeć użytkownika: {user.sex}</p>
  </div>
)

const CarItem = ({ item }) => (
  <div>
    <h1>Auto {item.brand}</h1>
    <h1>Jest z  {item.year} roku</h1>
  </div>
)
class ListItems extends React.Component {
  state = {

  }
  render() {
    let users = this.props.data.users
    users = users.filter((user) => user.sex === "male")
    const Items = users.map(user => <Item key={user.id} user={user} />)

    let cars = this.props.data.cars
    cars = cars.filter( (car) => car.engine === "diesel")
    const CarItems = cars.map(car => <CarItem key={car.id} item={car} />)

    return (
      <ul>
        {Items}
        {CarItems}
      </ul>
    )
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root'))
