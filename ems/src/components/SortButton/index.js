import React from "react";
import './index.css';

function SortAZ(props) {
  return (
    <button onClick={props.sortEmployees} className="btn btn-primary">
        Sort Alphabetically
    </button>
  );
}

export default SortAZ;