import React, {Component} from 'react';
import Wrapper from "../Wrapper";
import Container from "../Container";
import Row from "../Row";
import employees from "../.././models/employees.json"
import SearchForm from "../SearchForm";
import EmployeeCard from "../EmployeeDetails";

class EMSContainer extends Component {

  state = {
    employees: employees,
    results: {},
    search: ""
  };

//   componentDidMount() {
//     this.setState({ employees })
//   }

  handleInputChange = event => {
    event.preventDefault();
    const value = event.target.value;
    this.setState ({ search : value }); 
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("searched:" + this.state.search)

    const searchedEmployee = this.state.employees.filter(
        (employee) => {
            return employee.firstName.toLowerCase() === this.state.search.toLowerCase();
        }
    );
    console.log(searchedEmployee);
    
    
  }

  render() {
    return (   
      <Container>
        <Row>
        <SearchForm 
        value={this.state.search}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
        />
        </Row><Row>
        {this.state.employees.map(employeeResults => (<Wrapper>
        <EmployeeCard
        name = {employeeResults.firstName + " " + employeeResults.lastName}
        role = {employeeResults.role}
        phoneNumber = {employeeResults.phoneNumber}
        emailAddress= {employeeResults.emailAddress}
        key= {employeeResults.id}
        /></Wrapper> ))}
        </Row>
      </Container>   
    );
  };  
};

export default EMSContainer;