import React, { Component } from 'react'
import { Redirect } from 'react-router';
import EmployeeService from '../service/EmployeeService'
import Logout from './LogoutAdmin';

class ViewEmployee extends Component{
    constructor(props){
        super(props)

        const token=localStorage.getItem("token");

        let loggedin=true;

        if(token==null)
        {
            loggedin=false;
        }

        this.state={
            employees: [],
            loggedin
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
        if(this.state.loggedin=== false)
        {
            return <Redirect to="/Adminlogin"></Redirect>
        }
        return (
            <div >
                <br/>
                <Logout/>
                <h2 className="text-center"> Employee List</h2>
                <div style={{marginLeft: "60px"}}>
                <div style={{marginRight: "60px"}}>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee </button>
                    {/* <div className="text-center"> */}
                    <table className="table table-striped table-bordered"  > 
                
                        <thead >
                       
                           
                            <tr>
                                 <th >Id </th>
                                <th>Govtid</th>
                                <th>Employee_Name</th>
                                <th>Occupation </th>
                                <th>Gender</th>
                                <th>Permanent_Address</th>
                                <th>Current_Address</th>
                                <th>DateOfBirth</th>
                                <th>Local_Refrence </th>
                                <th>Phone_No</th>
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
                </div>
             </div>
        )
    }
}
export default ViewEmployee;