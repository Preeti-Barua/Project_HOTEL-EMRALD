import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Logout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedin:''
        }
        
        this.logout = this.logout.bind(this);
    }
    logout()
    {
       
        localStorage.removeItem("token");
        this.setState({loggedin:false});
        console.log(2222);
        
    }

    render() {
        if(this.state.loggedin=== false)
        {
            return <Redirect to="/"></Redirect>
        }
        return (
            <div>
                <button style={{marginLeft: "1200px"}}  className="btn btn-danger" onClick={this.logout}>Logout 
                
                </button>
                
            </div>
        )
    }
}