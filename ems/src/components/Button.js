import React from "react";

function ViewAll(props) {
  return (
    <button onClick={props.onClick} className="btn btn-primary">
    {props.children}
    </button>
  );
}

export default ViewAll;