import React, { Component } from "react"; 

class Employee extends Component {
    state = {
        firstName: "",
        lastName: "",
        role: "",
        phoneNumber: ""
    };
    
    addEmployee = event => {
        const value = event.target.value;
        const name = event.target.name;
    
        this.setState({
          [name]: value
        });
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state)

        this.setState({
            firstName: "",
            lastName: "",
            role: "",
            phoneNumber: ""
        });
    };

    render() {
        return (
            <div>
                <form className="form">
                    <input
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.addEmployee}
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.addEmployee}
                        type="text"
                        placeholder="Last Name"
                    />
                    <input
                        value={this.state.role}
                        name="role"
                        onChange={this.addEmployee}
                        type="text"
                        placeholder="Role in Company"
                    />
                    <input
                        value={this.state.phoneNumber}
                        name="phoneNumber"
                        onChange={this.addEmployee}
                        type="text"
                        placeholder="Phone Number"
                    />
                    <button onClick={this.handleFormSubmit}>"Submit"</button>
                </form> 
            </div>
            

        )
    }
}

export default Employee;