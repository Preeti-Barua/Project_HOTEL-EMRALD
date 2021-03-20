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
       
        localStorage.removeItem("tokenrec");
        this.setState({loggedin:false});
        console.log(111);
        
    }

    render() {
        if(this.state.loggedin=== false)
        {
            return <Redirect to="/"></Redirect>
        }
        return (
            <div>
                <button style={{marginLeft: "800px"}}  className="btn btn-danger" onClick={this.logout}>Logout 
                
                </button>
                
            </div>
        )
    }
}