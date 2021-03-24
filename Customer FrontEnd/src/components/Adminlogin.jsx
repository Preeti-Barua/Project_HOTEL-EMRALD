import React, { Component } from 'react'
import Service from '../service/Service';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons/index";
import { Redirect } from 'react-router';
const eye = <FontAwesomeIcon icon={faEye} />;

export default class Adminlogin extends Component {

    constructor(props) {
        super(props)

        const token=localStorage.getItem("token");

        let loggedin=true;

        if(token===null)
        {
            
            loggedin=false;
        }
        this.state = {
            AdminId: '',
            pass: '',
            status:'',
            x:'password',
            loggedin
        }
        
        this.Postlogin = this.Postlogin.bind(this);
        this.myFunction = this.myFunction.bind(this);
    }
    

    Postlogin = (e) => {
        e.preventDefault();
       
        let ad={adminid:this.state.AdminId,password:this.state.pass};
        Service.loginadmin(ad).then(res =>{
            let c=res.data;
            console.log(c);
            this.setState({status:c.status});
            if(c.status===1)
            {
                localStorage.setItem("token","llookkpp");
                this.setState({loggedin:true});
                // this.props.history.push('/Admin');
            }
           
            
        })
    }
   

    changeAcnoHandler= (event) => {
        this.setState({AdminId: event.target.value});
    }

    changePinHandler= (event) => {
        this.setState({pass: event.target.value});
    }

    getTitle()
    {
        if(this.state.status===0)
        {
            return <div className="text-center">Login Failed</div>
        }
    }
    cancel(){
        this.props.history.push('/');
    }
    
    myFunction() {
        
        if (this.state.x === "password") {
            this.setState({x:"text"});
        } else {
            this.setState({x:"password"});
        }
      }
    
    render() {
        if(this.state.loggedin)
        {
            return <Redirect to='/Admin'></Redirect>
        }
    return (
        
        <div className="container">
             <br/>
             <br/>
            <h3 className="text-center">Admin Login</h3>
                    <div className="text-danger">
                        {
                            this.getTitle()
                        }
                    </div>
            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            
                        <div className = "card-body">
                        
                                    <form>
                                    <div className = "form-group">
                                            <label> Admin Id: </label>
                                            <input placeholder="Admin Id" name="AdminId" className="form-control" 
                                                value={this.state.AdminId} onChange={this.changeAcnoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input type={this.state.x} placeholder="Password" name="pass" className="form-control" 
                                                value={this.state.pass} onChange={this.changePinHandler}
                                                />
                                                {/* <i>{eye}</i> */}
                                                <br/>
                                                <i onClick={ () => this.myFunction()}>{eye}</i>
                                                
                                        </div>
                                        
                                        

                                        <button className="btn btn-success" onClick={this.Postlogin}>Admin Login</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                    
                                </div>
                                </div>
        </div>
    )
   }
   
}








