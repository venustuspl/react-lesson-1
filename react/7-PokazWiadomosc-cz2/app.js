class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageIsActive: false
    };
    this.handleMessageButton2 = this.handleMessageButton2a.bind(this);
  }

  handleMessageButton() {
    this.setState((prevState) => ({
      messageIsActive: !prevState.messageIsActive
    }));
  }

handleMessageButton2a() {
  debugger
    this.setState((prevState) => ({
        messageIsActive: !prevState.messageIsActive
    }));
}

  render() {
    // console.log(this.state.messageIsActive);
    const text =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minus voluptas temporibus accusantium molestiae distinctio eum ipsum fugiat, hic repudiandae ipsa cum ipsam enim optio? Ut repellat ipsum optio exercitationem?";

    return (
      <React.Fragment>
        <button onClick={this.handleMessageButton2}>     {this.state.messageIsActive ? 'Ukryj' : "Pokaż"}
        </button>
        {/* {this.state.messageIsActive ? <p>{text}</p> : null} */}
        {this.state.messageIsActive && <p>{text}</p>}

      </React.Fragment>
    );
  }
}

ReactDOM.render(<Message />, document.getElementById("root"));
// <p>{this.state.messageIsActive && text}</p>