import React, { Component } from 'react'

export default class PostAdminLoginPage extends Component {

    constructor(props) {
        super(props)

        this.viewEmployee = this.viewEmployee.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
        this.roomInfo = this.roomInfo.bind(this);
        this.addRooms = this.addRooms.bind(this);
    }

    viewEmployee()
    {
        this.props.history.push('/view-Employee');
    }

    addEmployee()
    {
        this.props.history.push('/add-Employee');
    }

    addRooms()
    {
        this.props.history.push('/add-Rooms');
    }

    roomInfo()
    {
        this.props.history.push('/Room-Info');
    }
    render() {
        return (
            <div>
                
                   <br/>
                   <br/>
                   {/* <div className="container bg-light"> */}
                    <div className="col-md-12 text-center">
                   
                   <button type="button" className="btn btn-warning" onClick={this.viewEmployee} >View All Employees</button><br/><br/>
                   <button type="button" className="btn btn-warning" onClick={this.addEmployee} >Add Employee</button><br/><br/>
                   <button type="button" className="btn btn-warning" onClick={this.addRooms} >Add rooms</button><br/><br/>
                   <button type="button" className="btn btn-warning" onClick={this.roomInfo} >Room Info</button><br/><br/>
                  

                    </div>
                    </div>
                    // </div>
              
                
       
           
        )
    }
}


