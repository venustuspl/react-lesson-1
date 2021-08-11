const Header = (props) => {
  const activeItems = props.items.filter(item => item.active)
  const number = activeItems.length
  const price = number * 3;
  return (
    <header>
      <h2>Wielkość zamówienia: {number}</h2>
      <h2>Cena 1szt.: 3zł </h2>
      <h2>Rabat: 10% </h2>
      <h2>Do zapłaty: {number ? `${price} złotych` : 'nie kupujesz, to nie płacisz'}</h2>
      <h2>{number ? `Kwota po rabacie ${ price - (price * 0.1) } złotych` : null }</h2>
    </header>
  )
} 