const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>;
const NegativeMessage = () => <p>Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!</p>;
const DisclaimerMessage = () => <p>Oglądaj legalne filmy</p>
const PersonsCount = () => <p>Kupujesz bilet dla 2 osób</p> 

class CheckboxAgeConfirmation extends React.Component {

  state = {
    isConfirmed: false,
    is2Persons: false
  }

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed
    })
  }

  handleCheckboxPersonsChange = () => {
    this.setState({
      is2Persons: !this.state.is2Persons
      }
    )
  }

  displayMessage = () => {
    if (this.state.isConfirmed) {
      return <><PositiveMessage /><DisclaimerMessage/></>
    } else {
      return <NegativeMessage />
    }
  }

  personsMessage = () => {
    if (this.state.is2Persons){
      return <PersonsCount/>
    }
  }

  render() {
    console.log(this.state.isConfirmed);
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={this.state.isConfirmed} />
        <label htmlFor="age">Mam co najmniej 16 lata</label>
        {this.displayMessage()}
        <input type="checkbox" id="persons" onChange={this.handleCheckboxPersonsChange} checked={this.is2Persons}/>
        <label htmlFor="persons">Kupujesz bilet dla 2 osób</label>
        {this.personsMessage()}
      </>
    )
  }
}

ReactDOM.render(<CheckboxAgeConfirmation />, document.getElementById('root'))