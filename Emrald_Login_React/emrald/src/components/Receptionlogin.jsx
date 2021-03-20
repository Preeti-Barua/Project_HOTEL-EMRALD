import React, { Component } from 'react'
import Service from '../service/Service';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect } from 'react-router';
import { faEye } from '@fortawesome/free-solid-svg-icons';
const eye = <FontAwesomeIcon icon={faEye} />;

export default class Reception extends Component {

    constructor(props) {
        super(props)

        const token=localStorage.getItem("tokenrec");

        let loggedin=true;

        if(token===null)
        {
            
            loggedin=false;
        }
        this.state = {
            ReceptionId: '',
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
       
        let ad={recId:this.state.ReceptionId,password:this.state.pass};
        Service.loginrec(ad).then(res =>{
            let c=res.data;
            console.log(c);
            this.setState({status:c.status});
            if(c.status===1)
            {
                localStorage.setItem("tokenrec","llookkppghhhh");
                this.setState({loggedin:true});
                // this.props.history.push('/Admin');
            }
           
            
        })
    }
   

    changeAcnoHandler= (event) => {
        this.setState({ReceptionId: event.target.value});
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
            return <Redirect to='/Reception'></Redirect>
        }
    return (
        
        <div>
             <br/>
             <br/>
            <h3 className="text-center">Receptionist Login</h3>
                    <p className="text-danger">
                        {
                            this.getTitle()
                        }
                    </p>
            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            
                        <div className = "card-body">
                        
                                    <form>
                                    <div className = "form-group">
                                            <label> Receptionist Id: </label>
                                            <input placeholder="Receptionist Id" name="RecId" className="form-control" 
                                                value={this.state.RecId} onChange={this.changeAcnoHandler}/>
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








