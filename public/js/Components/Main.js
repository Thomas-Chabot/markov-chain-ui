class Main extends React.Component {
  static get Id(){ return this._id || 1000; }
  static set Id(newId){ this._id = newId; }

  constructor (props) {
    super (props);
    this.state = {
      texts: [ ]
    }
  }

  generateNewText () {
    this.loadNewText ();
  }

  render(){
    return(
      <div className='main'>
        <GenBox texts={this.state.texts} />
        <Buttons loadNext={()=>{this.generateNewText()}} />
      </div>);
  }

  componentDidMount () {
    this.loadNewText ();
  }

  loadNewText(){
    console.log ("Loading ...");
    doLoadText().then ((text) => {
      this._updateText (text);
    }, (...a)=>{
      this._updateText ("ERROR: could not generate text");
    })
  }

  _updateText (text) {
    this.setState ((state) => {
      return {
        texts: state.texts.concat ({
          text: text,
          dateTime: Date.now(),
          key: Main.Id++
        })
      }
    });
  }
}
