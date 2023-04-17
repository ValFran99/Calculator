function Display(props){
  return(
    <div className="display-container">
      <div className="fullFormula">
        {props.displayFormula}
      </div>
      <div className="nowInput" id="display">
        {props.displayInput}
      </div>
    </div>
  );
}

export default Display;