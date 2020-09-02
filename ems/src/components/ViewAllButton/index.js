import React from "react";
import './index.css';

function ViewAll(props) {
  return (
    <button onClick={props.sortEmployees} className="btn btn-primary">
        Sort Alphabetically
    </button>
  );
}

export default ViewAll;