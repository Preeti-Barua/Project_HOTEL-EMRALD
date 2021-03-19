import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService'

class ViewEmployee extends Component{
    constructor(props){
        super(props)

        this.state={
            employees: []

        }
        this.addEmployee= this.addEmployee.bind(this);
        this.editEmployee=this.editEmployee.bind(this);
      
    }

    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);

    }
    addEmployee(){
        this.props.history.push('/add-employee');
    }

    // checkEmployee(){
    //     this.props.history.push('/checking');
    // }
    componentDidMount(){

        EmployeeService.getEmployees().then((res) => {

            this.setState({employees: res.data});
            console.log(res.data);
        });


     }
    render()
    {
        return (
            <div>
                <h2 className="text-center"> Employee List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee </button>
                    {/* <div className="text-center"> */}
                    <table className="table table-striped table-bordered"  > 
                
                        <thead >
                       
                           
                            <tr>
                                 <th >id </th>
                                <th>govtid</th>
                                <th>Name</th>
                                <th>occupation </th>
                                <th>gender</th>
                                <th>permanent_address</th>
                                <th>temporary_address</th>
                                <th>dateofbirth</th>
                                <th>localrefrence </th>
                                <th>phoneno</th>
                                <th >Actions </th>
                             
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key={employee.empid}>
                                         <td>{employee.empid}</td>
                                        <td>{employee.govtid}</td>
                                        <td>{employee.name}</td>
                                          <td>{employee.occupation}</td>
                                          <td>{employee.gender}</td>
                                          <td>{employee.permanent_address}</td>
                                          <td>{employee.temporary_address}</td>
                                          <td>{employee.dateofbirth}</td>
                                          <td>{employee.localrefrence}</td>
                                          <td>{employee.phoneno}</td>
                                          <td>
                                              <button onClick= { () =>this.editEmployee(employee.empid)}className="btn btn-info">Update</button>
                                            
 
                                          </td>
                                          </tr>         
                                )
                            }
                        </tbody>
                            
                    </table>
                    </div>

                </div>
            // </div>
        )
    }
}
export default ViewEmployee;