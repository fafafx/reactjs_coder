

function Button(props) {
  
  return (
    <button onClick={props.onClick} className="btn btn-primary btnCart mt-0">
      {props.children}
    </button>
  );
}

export default Button;
