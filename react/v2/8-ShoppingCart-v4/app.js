// destrukturyzacja

class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 1,
    discount: false,
  }

  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1,
    })
  }

  handleAddToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1,
    })
  }

  handleBuy = () => {
    if (this.state.shoppingCart > 3) {
      this.setState({
        discount: true,
      })
    }
      
    this.setState({
      availableProducts: this.state.availableProducts - this.state.shoppingCart,
      shoppingCart: 0,
      discount: false,
    })
  }

  render() {
    const { shoppingCart, availableProducts, discount } = this.state
    const style = shoppingCart === 0 ? { opacity: 0.3, color: 'red'} : { color: 'green' };

    return (
      <div>
        <button disabled={shoppingCart ? false : true} onClick={this.handleRemoveFromCart}>-</button>

        <span style={style}> {shoppingCart} </span>

        <button disabled={shoppingCart === availableProducts ? true : false} onClick={this.handleAddToCart}>+</button>
        {shoppingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}
        {shoppingCart > 3 && <div> You will get discount</div>}

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))