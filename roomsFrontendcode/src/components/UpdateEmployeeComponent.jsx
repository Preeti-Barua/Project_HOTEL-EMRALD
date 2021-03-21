import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService'

export default class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props) 

        this.state={
            empid: this.props.match.params.id,
            govtid:' ',
            name:' ',
            occupation:' ',
            gender:' ',
            permanent_address:' ',
            temporary_address:' ',
            dateofbirth:' ',
            localrefrence:' ',
            phoneno:' ',
            status: ' '
        


        }
        this.changenameHandler=this.changenameHandler.bind(this)
        this.updateEmployee=this.updateEmployee.bind(this)
    }
    componentDidMount(){
        EmployeeService.getEmployeesById(this.state.empid).then((res) =>{
            let employee=res.data.content;
            console.log(employee);
            this.setState({
                // empid:employee.empid,
                govtid: employee.govtid,
                name:employee.name,
                occupation: employee.occupation,
                gender:employee.gender,
                permanent_address:employee.permanent_address,
                temporary_address:employee.temporary_address,
                dateofbirth:employee.dateofbirth,
                localrefrence:employee.localrefrence,
                phoneno:employee.phoneno,
                status: employee.status
                  });
         
        });
    }
    updateEmployee= (e) =>{
        e.preventDefault();
        let emp= {
            empid:this.state.empid,
            govtid:this.state.govtid,
            name:this.state.name,
            occupation:this.state.occupation,
            gender:this.state.gender,
            permanent_address:this.state.permanent_address,
            temporary_address:this.state.temporary_address,
            dateofbirth:this.state.dateofbirth,
            localrefrence:this.state.localrefrence,
            phoneno:this.state.phoneno,
            status:this.state.status,
            };
            console.log('employee =>' +JSON.stringify(emp));

            EmployeeService.updateEmployee(emp).then(res =>{

                this.props.history.push('/view-Employee');
            });


    }
    // changeidHandler=(event)=>{
    //     this.setState({id: event.target.value});
    // }
    changegovtidHandler=(event)=>{
        this.setState({govtid: event.target.value});
    }
    changenameHandler=(event)=>{
        this.setState({name: event.target.value});
    }
    changeoccupationHandler=(event)=>{
        this.setState({occupation: event.target.value});
    }
    changegenderHandler=(event)=>{
        this.setState({gender: event.target.value});
    }
    changepermanent_addressHandler=(event)=>{
        this.setState({permanent_address: event.target.value});
    }
    changetemporary_addressHandler=(event)=>{
        this.setState({temporary_address: event.target.value});
    }

    changeDateofBirthHandler=(event)=>{
        this.setState({dateofbirth: event.target.value});
    }
   
    changelocalrefrenceHandler=(event)=>{
        this.setState({localrefrence: event.target.value});
    }

   changephonenoHandler=(event)=>{
        this.setState({phoneno: event.target.value});
    }
    changestatusHandler=(event)=>{
        this.setState({status: event.target.value});
    }

   
   
    
    cancel(){
        this.props.history.push('/view-Employee');
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">update Employees</h3>
                        <div className="card-body">
                            <form>
                            {/* <div className="form-group">
                                                <label> EmployeeId</label>
                                                <input placeholder="id" name="id" className="form-control"
                                                value={this.state.id} onChange={this.changeidHandler}/>
                                            </div> */}
                                            <div className="form-group">
                                                <label>Govtid</label>
                                                <input placeholder="Govtid" name="govtid" className="form-control"
                                                value={this.state.govtid} onChange={this.changegovtidHandler}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input placeholder="Employee Name" name="name" className="form-control"
                                                value={this.state.name} onChange={this.changenameHandler}/>
                                            </div>
                                            <div className="form-group">
                                                <label>designation</label>
                                                <input placeholder="designation" name="occupation" className="form-control"
                                                value={this.state.occupation} onChange={this.changeoccupationHandler}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Gender</label>
                                                <input placeholder="'M' or 'F'" name="gender" className="form-control"
                                                value={this.state.gender} onChange={this.changegenderHandler}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Permanent Address</label>
                                                <input placeholder="P Address" name="permanent_address" className="form-control"
                                                value={this.state.permanent_address} onChange={this.changepermanent_addressHandler}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Temp address</label>
                                                <input placeholder="temp address" name="temporary_address" className="form-control"
                                                value={this.state.temporary_address} onChange={this.changetemporary_addressHandler}/>
                                            </div>



                                            <div className="form-group">
                                                <label>DOB</label>
                                                <input placeholder="Date-of-Birth" name="dateofbirth" className="form-control"
                                                value={this.state.dateofbirth} onChange={this.changeDateofBirthHandler}/>
                                            </div>
                                       
                                         
                                            <div className="form-group">
                                                <label>localrefrence</label>
                                                <input placeholder="localrefrence" name="localrefrence" className="form-control"
                                                value={this.state.localrefrence} onChange={this.changelocalrefrenceHandler}/>
                                            </div>
                                         
                                         <div className="form-group">
                                                <label>Phone</label>
                                                <input placeholder="Contact Number" name="phoneno" className="form-control"
                                                value={this.state.phoneno} onChange={this.changephonenoHandler}/>
                                            </div>

                                            <div className="form-group">
                                                <label>Status</label>
                                                <input placeholder="Status" name="status" className="form-control"
                                                value={this.state.status} onChange={this.changestatusHandler}/>
                                            </div>
                                          

                                            <button className="btn btn-success" onClick={this.updateEmployee}>update</button>
                                            <button className="btn btn-danger" onClick={this.cancel.bind(this)}style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
    
