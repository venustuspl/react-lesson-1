class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 1,
  }

  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1,
    })
  }

  handleRemoveFromCartPair = () => {
    this.setState({
      shoppingCart: this.setState.shoppingCart - 2,
    })
  }

  handleAddToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1,
    })
  }

  handleAddToCartPair = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 2,
    })
  }

  render() {
    return (
      <React.Fragment>
      <div>
        <button disabled={this.state.shoppingCart < 1 ? true : false} onClick={this.handleRemoveFromCart}> -1 </button>
        <span> {this.state.shoppingCart} </span>
        <button disabled={this.state.shoppingCart >= this.state.availableProducts ? true : false} onClick={this.handleAddToCart}> +1 </button>
      </div>
      <div>
        <button disabled={(this.state.shoppingCart - 2 ) < 0 ? true : false} onClick={this.handleRemoveFromCartPair}> -2 </button>
        <span> {this.state.shoppingCart}</span>
        <button disabled={(this.state.shoppingCart + 2) > this.state.availableProducts ? true : false} onClick={this.handleAddToCartPair}> +2 </button>
      </div>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))