import React, { Component } from 'react'
import { Redirect } from 'react-router';
import Service from '../service/Service'
import Logout from './LogoutRec';

class ViewCustomer extends Component{
    constructor(props){
        super(props)

        const token=localStorage.getItem("tokenrec");

        let loggedin=true;

        if(token==null)
        {
            loggedin=false;
        }

        this.state={
            customers: [],

            status:'',
            loggedin
        }
        this.addCustomer= this.addCustomer.bind(this);
        this.editCustomer=this.editCustomer.bind(this);
      
    }

    editCustomer(cid){
        this.props.history.push(`/update-Customer/${cid}`);

    }
    addCustomer(){
        this.props.history.push('/add-Customer');
    }

    // checkEmployee(){
    //     this.props.history.push('/checking');
    // }
    componentDidMount(){

        Service.getCustomers().then((res) => {
            let c=res.data;
            console.log(c);
            this.setState({status:c.status});
            if(c.status===1)
            {
                this.setState({customers: c.contlist});
            }
            

        });


     }

    getTitle()
    {
        if(this.state.status===0)
        {
            return <div className="text-center">No Customer Found !</div>
        }
    }

    render()
    {
        if(this.state.loggedin=== false)
        {
            return <Redirect to="/Receptionlogin"></Redirect>
        }
        return (
            // <div className="container">
                <div style={{marginLeft: "40px"}}>
                <br/>
                <Logout/>
                
                <h2 className="text-center"> Customer List</h2>
                <div className="text-danger">
                        {
                            this.getTitle()
                        }
                    </div>
                    <div style={{marginRight: "40px"}} >
                <div className="row">
                    {/* <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee </button> */}
                    {/* <div className="text-center"> */}
                    <table className="table table-striped table-bordered"  > 
                
                        <thead >
                           
                            <tr>
                                <th>Id</th>
                                <th>GovtId</th>
                                <th>CustomerName</th>
                                <th>Gender</th>
                                <th>PhoneNo</th>
                                <th>Address</th>
                                {/* <th>Pincode</th> */}
                                <th>RoomNo</th>
                                <th>CheckInDate </th>
                                <th>CheckInTime</th>
                                <th >CheckOutDate </th>
                                <th>CheckOutTime</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.customers.map(
                                    customer =>
                                    <tr key={customer.customerid}>
                                         <td>{customer.customerid}</td>
                                        <td>{customer.govtid}</td>
                                        <td>{customer.name}</td>
                                          <td>{customer.gender}</td>
                                          <td>{customer.phone_no}</td>
                                          <td>{customer.city_address}</td>
                                          {/* <td>{customer.pincode}</td> */}
                                          <td>{customer.roomno}</td>
                                          <td>{customer.checkindate}</td>
                                          <td>{customer.checkintime}</td>
                                          <td>{customer.checkoutdate}</td>
                                          <td>{customer.checkouttime}</td>
                                          <td>
                                              <button onClick= { () =>this.editCustomer(customer.customerid)}className="btn btn-info">Update</button>
                                            
 
                                          </td>
                                          </tr>         
                                )
                            }
                        </tbody>
                            
                    </table>
                    </div>
                    </div>
            </div>
            // </div>
        )
    }
}
export default ViewCustomer;
