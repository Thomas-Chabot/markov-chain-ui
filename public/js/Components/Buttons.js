class Buttons extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      doLoadNext: props.loadNext
    }
  }

  render(){
    return <input className='next-button' type="button" value="next" onClick={this.state.doLoadNext} />
  }
}
