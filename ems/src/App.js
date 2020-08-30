import React from 'react';
import Wrapper from "./components/Wrapper";
import EmployeeCard from "./components/EmployeeCard";
import employees from "./employees.json"

const App = () => {
  return (
    <Wrapper>
      <EmployeeCard
      name = {employees[0].firstName + " " + employees[0].lastName}
      role = {employees[0].role}
      phoneNumber = {employees[0].phoneNumber}
      emailAddress= {employees[0].emailAddress}
      />
    </Wrapper>    
  );
}

export default App;
