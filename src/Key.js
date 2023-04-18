function Key(props){
  return(
    <div onClick={() => props.clickHandler(props.keyValue)} id={props.keyId} className="key">
      {props.keyValue}
    </div>
  )
}

export default Key;