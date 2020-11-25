import React from "react";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name} 
          </li>
          <li>
            <strong>Role:</strong> {props.role}
          </li>
          <li>
            <strong>Phone Number:</strong> {props.phoneNumber}
          </li>
          <li>
            <strong>Email Address:</strong> {props.emailAddress}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;