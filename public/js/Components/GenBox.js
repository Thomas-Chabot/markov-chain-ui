class GenBox extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      texts: props.texts || [ ]
    };
  }

  render () {
    return <div className='genbox'>
    {
      this.props.texts.map (function (data){
        return <Textbox text={data.text} time={data.dateTime} key={data.key} />
      })
    }
    <div className='genbox-bottom' ref={el => this.bottom = el } />
    </div>
  }

  componentDidUpdate(){ this.scrollToBottom(); }
  scrollToBottom(){
    this.bottom.scrollIntoView({ behavior: "smooth" });
  }
}
