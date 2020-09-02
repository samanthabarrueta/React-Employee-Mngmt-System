import React from "react";
import './index.css';

function ViewAll(props) {
  return (
    <div className="form-group">
        <button onClick={props.viewAllEmployees} className="btn btn-primary">
          View All Employees
        </button>
    </div>
  );
}

export default ViewAll;