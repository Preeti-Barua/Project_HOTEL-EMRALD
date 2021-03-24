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
        this.roomsinfo = this.roomsinfo.bind(this);
      
    }

    roomsinfo()
    {
        this.props.history.push('/show-rooms');
    }
    viewCustomers()
    {
        this.props.history.push('/view-Customers');
    }

    // rooms()
    // {
    //     this.props.history.push('/add-Customer');
    // }
    


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
                   <button type="button" className="btn btn-warning" onClick={this.roomsinfo}>Rooms</button><br/><br/>
                
            </div>
            </div>
                    </div>
        )
    }
}

