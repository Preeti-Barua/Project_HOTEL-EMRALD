import React, { Component } from 'react'

export default class PostReceptionloginPage extends Component {
    constructor(props) {
        super(props)

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
        return (
            <div>
                    
                    <br/>
                   <br/>
                    <div class="container bg-light">
                    <div class="col-md-12 text-center">
                    <button type="button" className="btn btn-warning" onClick={this.viewCustomers} >View All Customers</button><br/><br/>
                   <button type="button" className="btn btn-warning" onClick={this.addCustomers} >Add Customers</button><br/><br/>
                
            </div>
            </div>
                    </div>
        )
    }
}

