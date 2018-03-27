function Timestamp(props) {
  return <span className='timestamp'>{new Date(props.time).toTimeString().replace(/ .+/g, "")}</span>
}

function Text(props) {
  return <span className='text'>{props.text}</span>
}

function Textbox(props) {
  return <div><Timestamp time={props.time}/><Text text={props.text} /></div>
}
