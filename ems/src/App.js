import React from 'react';
import Wrapper from "./components/Wrapper";
import EmployeeCard from "./components/EmployeeCard";
import employees from "./employees.json"

class App extends React.Component {

  state = {
    employees
  };

  render() {
    return (
      this.state.employees.map(employee => (<Wrapper>
      <EmployeeCard
      name = {employee.firstName + " " + employee.lastName}
      role = {employee.role}
      phoneNumber = {employee.phoneNumber}
      emailAddress= {employee.emailAddress}
      /></Wrapper>
      ))   
    );
  };  
};

export default App;
