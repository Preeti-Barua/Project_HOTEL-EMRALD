import React, { Component } from 'react'
import { Redirect } from 'react-router';
import EmployeeService from '../service/EmployeeService'
import Logout from './LogoutAdmin';

export default class AddEmployee extends Component {
    constructor(props){
        super(props)

        const token=localStorage.getItem("token");

        let loggedin=true;

        if(token==null)
        {
            loggedin=false;
        }
        this.state={
            id: '',
            govtid:'',
            Employeename:'',
            occupation:'',
            gender:'',
            permanent_address:'',
            temporary_address:'',
            dateofbirth:'',
            localrefrence:'',
            phoneno:'',
            status: '',

            st:'',
            loggedin
        


        }
        this.changenameHandler=this.changenameHandler.bind(this)
        this.saveEmployee=this.saveEmployee.bind(this)
    }
    saveEmployee= (e) =>{
        e.preventDefault();
        let employee= {empid:this.state.id,
            govtid:this.state.govtid,
            name:this.state.name,
            occupation:this.state.occupation,
            gender:this.state.gender,
            permanent_address:this.state.permanentaddress,
            temporary_address:this.state.temporaryaddress,
            dateofbirth:this.state.dateofbirth,
            localrefrence:this.state.localrefrence,
            phoneno:this.state.phoneno,
            status:this.state.status,
            };
            console.log('employee =>' +JSON.stringify(employee));

            EmployeeService.createEmployee(employee).then(res =>{
                let c=res.data;
                console.log(c);
                this.setState({st:c.status});
                if(c.status===1)
                {
                    this.props.history.push('/view-Employee');
                }
            });


    }
    changeidHandler=(event)=>{
        this.setState({id: event.target.value});
    }
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
    changepermanentaddressHandler=(event)=>{
        this.setState({permanentaddress: event.target.value});
    }
    changetemporaryaddressHandler=(event)=>{
        this.setState({temporaryaddress: event.target.value});
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

    getTitle()
    {
        if(this.state.st===0)
        {
            return <div className="text-center">Employee could not be added</div>
        }
    }
   
    
    cancel(){
        this.props.history.push('/employees');
    }
    render() {
        if(this.state.loggedin=== false)
        {
            return <Redirect to="/Adminlogin"></Redirect>
        }
        return (
            <div>
                <br/>
                <Logout/>
                <div className="container">
                <div className="text-danger">
                        {
                            this.getTitle()
                        }
                    </div>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Employee</h3>
                        <div className="card-body">
                            <form>
                            <div className="form-group">
                                                <label> EmployeeId</label>
                                                <input placeholder="id" name="id" className="form-control"
                                                value={this.state.id} onChange={this.changeidHandler}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Govtid</label>
                                                <input placeholder="Govtid" name="DateofBirth" className="form-control"
                                                value={this.state.govid} onChange={this.changegovtidHandler}/>
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
                                                <input placeholder="P Address" name="permanentaddress" className="form-control"
                                                value={this.state.permanentaddress} onChange={this.changepermanentaddressHandler}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Temp address</label>
                                                <input placeholder="temp address" name="temporaryaddress" className="form-control"
                                                value={this.state.temporaryaddress} onChange={this.changetemporaryaddressHandler}/>
                                            </div>



                                            <div className="form-group">
                                                <label>DOB</label>
                                                <input placeholder="Date-of-Birth" name="dateofbirth" className="form-control"
                                                value={this.state.DateofBirth} onChange={this.changeDateofBirthHandler}/>
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
                                          

                                            <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
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
