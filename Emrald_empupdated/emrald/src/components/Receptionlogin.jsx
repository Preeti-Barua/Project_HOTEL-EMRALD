import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap';


export default class Receptionlogin extends Component {

    constructor(props) {
        super(props)

        this.Postlogin = this.Postlogin.bind(this);
    }
    

    Postlogin()
    {
        this.props.history.push('/Reception');
    }
    
    render() {
    return (
    
        <div>
             <br/>
             <br/>
            <h3 className="text-center">Reception Login</h3>
       <Form style={{width:"40%", marginLeft:"30%", marginTop:"3%"}}>
                <Form.Group >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Reception Username" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Reception Password" />
                </Form.Group>
                <Button className="btn-lg btn-dark btn-block" onClick={this.Postlogin} >Log in </Button>
            </Form>
        </div>
    )
   }
   
}




