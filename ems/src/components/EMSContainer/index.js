import React, {Component} from 'react';
import Wrapper from "../Wrapper";
import { Container, Row, Col } from 'react-bootstrap';
import employees from "../.././models/employees.json";
import SearchForm from "../SearchForm";
import EmployeeCard from "../EmployeeDetails";
//import SortButton from "../SortButton";
import ViewAllButton from "../ViewAllButton";

class EMSContainer extends Component {

  state = {
    employees: employees,
    results: {},
    search: ""
  };

  handleInputChange = event => {
    event.preventDefault();
    const value = event.target.value;
    this.setState ({ search : value }); 
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("searched:" + this.state.search)  
    this.searchEmployees(this.state.search)    
  }

  searchEmployees = () => {
    let searchedEmployee = employees.filter(
      (employee) => {
          return employee.firstName.toLowerCase() === this.state.search.toLowerCase();
      }
    );
    console.log(searchedEmployee);
    this.setState ({ employees: searchedEmployee })
  }

  viewAllEmployees = () => {
    this.setState ({ employees: employees })
  }

  sortEmployees = () => {
    const sortedEmployee = [...employees].sort((a, b) => b[employees.firstName] - a[employees.firstName]);
    //let sortedEmployee = this.state.employees.sort(employees.firstName)
    console.log(sortedEmployee);
    this.setState ({ employees: sortedEmployee })
  }

  render() {
    return (   
      <Container>
        <Wrapper>        
          <Col>
            <SearchForm 
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            /> <ViewAllButton 
            viewAllEmployees={this.viewAllEmployees}
            />
            
            
            {this.state.employees.map(employeeResults => (<EmployeeCard
            name = {employeeResults.firstName + " " + employeeResults.lastName}
            role = {employeeResults.role}
            phoneNumber = {employeeResults.phoneNumber}
            emailAddress= {employeeResults.emailAddress}
            key= {employeeResults.id}
            /> )) }
          </Col>
        </Wrapper>
      </Container>  
      
    );
  };  
};

export default EMSContainer;



{/* <SortButton 
        sortEmployees={this.sortEmployees}
        />  */}