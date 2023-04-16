function Display(props){
  return(
    <div id="display">
      <div className="fullFormula">
        {props.displayFormula}
      </div>
      <div className="nowInput">
        {props.displayInput}
      </div>
    </div>
  );
}

export default Display;