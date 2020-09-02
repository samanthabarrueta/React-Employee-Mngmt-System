import React from "react";
import './index.css';

function ViewAll(props) {
  return (
    <button onClick={props.viewAllEmployees} className="btn btn-primary">
      View All Employees
    </button>
  );
}

export default ViewAll;