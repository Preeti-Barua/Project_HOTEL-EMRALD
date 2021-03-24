import React, { Component } from 'react'
import { Redirect } from 'react-router';
import Service from '../service/Service'
import Logout from './LogoutRec';

export default class UpdateCustomer extends Component {
    constructor(props){
        super(props)

        const token=localStorage.getItem("tokenrec");

        let loggedin=true;

        if(token==null)
        {
            loggedin=false;
        }
        this.state={
            Cid: this.props.match.params.cid,
            Govtid:'',
            Cname:'',
            Gender:'',
            Phno:'',
            City_add:'',
            Pincode:'',
            Roomno:'',
            Checkindate:'',
            Checkintime:'',
            Checkoutdate:'',
            Checkouttime:'',

            status:'',
            loggedin
        


        }
        this.changenameHandler=this.changenameHandler.bind(this)
        this.updateCustomer=this.updateCustomer.bind(this)
    }

    componentDidMount(){
        Service.getCustomerById(this.state.Cid).then((res) =>{
            let Customer=res.data.content;
            console.log(Customer);
            this.setState({
                // Cid:employee.customerid,
                Govtid: Customer.govtid,
                Cname:Customer.name,
                Gender:Customer.gender,
                Phno:Customer.phone_no,
                City_add:Customer.city_address,
                Pincode:Customer.pincode,
                Roomno:Customer.roomno,
                Checkindate:Customer.checkindate,
                Checkintime:Customer.checkintime,
                Checkoutdate:Customer.checkoutdate,
                Checkouttime:Customer.checkouttime,
                
                  });
         
        });
    }

    updateCustomer= (e) =>{
        e.preventDefault();
        let Customer= {
            customerid:this.state.Cid,
            govtid:this.state.Govtid,
            name:this.state.Cname,
            gender:this.state.Gender,
            phone_no:this.state.Phno,
            city_address:this.state.City_add,
            pincode:this.state.Pincode,
            roomno:this.state.Roomno,
            checkindate:this.state.Checkindate,
            checkintime:this.state.Checkintime,
            checkoutdate:this.state.Checkoutdate,
            checkouttime:this.state.Checkouttime,
            };
            console.log('Customer =>' +JSON.stringify(Customer));

            Service.updtCustomer(Customer).then(res =>{
                let c=res.data;
                console.log(c);
                this.setState({status:c.status});
                if(c.status===1)
                {
                    this.props.history.push('/');
                }
            });


    }
    // changeidHandler=(event)=>{
    //     this.setState({Cid: event.target.value});
    // }
    changegovtidHandler=(event)=>{
        this.setState({Govtid: event.target.value});
    }
    changenameHandler=(event)=>{
        this.setState({Cname: event.target.value});
    }
    changegenderHandler=(event)=>{
        this.setState({Gender: event.target.value});
    }
    changephonenoHandler=(event)=>{
        this.setState({Phno: event.target.value});
    }
    changepermanentaddressHandler=(event)=>{
        this.setState({City_add: event.target.value});
    }
    changepincodeHandler=(event)=>{
        this.setState({Pincode: event.target.value});
    }
    changeroomnoHandler=(event)=>{
        this.setState({Roomno: event.target.value});
    }

    changecheckindateHandler=(event)=>{
        this.setState({Checkindate: event.target.value});
    }
   
    changecheckintimeHandler=(event)=>{
        this.setState({Checkintime: event.target.value});
    }

    changecheckoutdateHandler=(event)=>{
        this.setState({Checkoutdate: event.target.value});
    }
    changecheckouttimeHandler=(event)=>{
        this.setState({Checkouttime: event.target.value});
    }

   
    getTitle()
    {
        if(this.state.status===0)
        {
            return <div className="text-center">Customer Details could not be Updated</div>
        }
    }
   
   
    
    cancel(){
        this.props.history.push('/Receptionlogin');
    }
    render() {
        if(this.state.loggedin=== false)
        {
            return <Redirect to="/Receptionlogin"></Redirect>
        }
        return (
            <div>
                <br/>
                <Logout/>
                <br/>
                <div className="container">
                    <div className="text-danger">
                        {
                            this.getTitle()
                        }
                    </div>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Customer</h3>
                        <div className="card-body">
                            <form>
                            {/* <div className="form-group"> 
                                                <label> Customer Id</label>
                                                <input placeholder="Customer Id" name="id" className="form-control"
                                                value={this.state.Cid} onChange={this.changeidHandler}/>
                                            </div> */}
                                            <div className="form-group">
                                                <label>Govt Id</label>
                                                <input placeholder="Adhar/Pan/Voter-Id" name="gid" className="form-control"
                                                value={this.state.Govtid} onChange={this.changegovtidHandler}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Customer Name</label>
                                                <input placeholder="Customer Name" name="name" className="form-control"
                                                value={this.state.Cname} onChange={this.changenameHandler}/>
                                            </div>
                                            
                                            <div className="form-group">
                                                <label>Gender</label>
                                                <input placeholder="'M' or 'F'" name="gender" className="form-control"
                                                value={this.state.Gender} onChange={this.changegenderHandler}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input placeholder="Contact Number" name="phoneno" className="form-control"
                                                value={this.state.Phno} onChange={this.changephonenoHandler}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Permanent Address</label>
                                                <input placeholder="P Address" name="permanentaddress" className="form-control"
                                                value={this.state.City_add} onChange={this.changepermanentaddressHandler}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Pincode</label>
                                                <input placeholder="Pincode" name="pin" className="form-control"
                                                value={this.state.Pincode} onChange={this.changepincodeHandler}/>
                                            </div>



                                            <div className="form-group">
                                                <label>Room No.</label>
                                                <input placeholder="Room No." name="rno" className="form-control"
                                                value={this.state.Roomno} onChange={this.changeroomnoHandler}/>
                                            </div>
                                       
                                         
                                            <div className="form-group">
                                                <label>Check-In-Date</label>
                                                <input placeholder="YYYY-MM-DD" name="Ckindate" className="form-control"
                                                value={this.state.Checkindate} onChange={this.changecheckindateHandler}/>
                                            </div>
                                         
                                         

                                            <div className="form-group">
                                                <label>Check-In-Time</label>
                                                <input placeholder="HH:MM" name="Chkintime" className="form-control"
                                                value={this.state.Checkintime} onChange={this.changecheckintimeHandler}/>
                                            </div>

                                            <div className="form-group">
                                                <label>Check-Out-Date</label>
                                                <input placeholder="YYYY-MM-DD" name="Ckoutdate" className="form-control"
                                                value={this.state.Checkoutdate} onChange={this.changecheckoutdateHandler}/>
                                            </div>

                                            <div className="form-group">
                                                <label>Check-Out-Time</label>
                                                <input placeholder="HH:MM" name="Chkouttime" className="form-control"
                                                value={this.state.Checkouttime} onChange={this.changecheckouttimeHandler}/>
                                            </div>
                                          

                                            <button className="btn btn-success" onClick={this.updateCustomer}>Save</button>
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

