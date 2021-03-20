import React, { Component } from 'react'
import { Redirect } from 'react-router';
import Logout from './LogoutRec';

export default class PostReceptionloginPage extends Component {
    constructor(props) {
        super(props)

        const token=localStorage.getItem("tokenrec");

        let loggedin=true;

        if(token==null)
        {
            loggedin=false;
        }

        this.state = {
            loggedin
        }

        this.viewCustomers = this.viewCustomers.bind(this);
        this.addCustomers = this.addCustomers.bind(this);
      
    }

    viewCustomers()
    {
        this.props.history.push('/view-Customers');
    }

    addCustomers()
    {
        this.props.history.push('/add-Customers');
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
                   <br/>
                    <div className="container bg-light">
                    <div className="col-md-12 text-center">
                    <button type="button" className="btn btn-warning" onClick={this.viewCustomers} >View All Customers</button><br/><br/>
                   <button type="button" className="btn btn-warning" onClick={this.addCustomers} >Add Customers</button><br/><br/>
                
            </div>
            </div>
                    </div>
        )
    }
}

