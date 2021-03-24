import React, { Component } from 'react'
import { Redirect } from 'react-router';

import RoomService from '../service/RoomService'
import Logout from './LogoutAdmin';

export default class UpdateRoombyAdmin extends Component {
    constructor(props){
        super(props) 

        const token=localStorage.getItem("token");

        let loggedin=true;

        if(token==null)
        {
            loggedin=false;
        }

        this.state={
            roomno: this.props.match.params.roomno,
            room_type:'',
            booking_status:'',
            cleaning_status:'',
            status:'',

            loggedin
 }
       // this.changeroom_typeHandler=this.changeroom_typeHandler.bind(this)
       // this.updateEmployee=this.updateEmployee.bind(this)
    }
    componentDidMount(){
        RoomService.getRoomByRoomno(this.state.roomno).then((res) =>{
            let R=res.data.content;
            console.log(R);
            this.setState({
                
                room_type: R.room_type,
                booking_status: R.booking_status,
                cleaning_status: R.cleaning_status
                  });
         
        });
    }
    updateRoom= (e) =>{
        e.preventDefault();
        let r1= {
            roomno:this.state.roomno,
            room_type:this.state.room_type,
            booking_status: this.state.booking_status,
            cleaning_status: this.state.cleaning_status
        }
            
            

            RoomService.updateRoombyAdmin(r1).then(res =>{
                let c=res.data;
                console.log(c);
                this.setState({status:c.status});
                if(c.status===1)
                {
                    this.props.history.push('/Room-Info');
                }
            });


    }
    
    changeroom_typeHandler=(event)=>{
        this.setState({room_type: event.target.value});
    }


    getTitle()
    {
        if(this.state.status===0)
        {
            return <div className="text-center">Room Info could not be Updated</div>
        }
    }

    
    cancel(){
        this.props.history.push('/Admin');
    }
    render() {
            if(this.state.loggedin=== false)
            {
                return <Redirect to="/Adminlogin"></Redirect>
            }
        return (
            <div >
                <br/>
                <Logout/>
                <br/>
                <div className="container" style={{backgroundImage: "url(/image.png)"}}>
                <div className="text-danger">
                        {
                            this.getTitle()
                        }
                    </div>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center" style={{"font-family":"elephant"}}>Update Room</h3>
                        <div className="card-body">
                            <form>
                            {/* <div className="form-group">
                                                <label> EmployeeId</label>
                                                <input placeholder="id" name="id" className="form-control"
                                                value={this.state.id} onChange={this.changeidHandler}/>
                                            </div> */}
                                            <div className="form-group">
                                                <label>Room No</label> 
                                                <input placeholder="roomno" className="form-control"
                                                value={this.state.roomno} disabled = "disabled"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Room Type</label>
                                                <input placeholder="Room type" name="room_type" className="form-control"
                                                value={this.state.room_type} onChange={this.changeroom_typeHandler}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Booking Status</label>
                                                <input placeholder="booking status" className="form-control"
                                                value={this.state.booking_status} disabled = "disabled"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Cleaning Status</label>
                                                <input placeholder="cleaning status" className="form-control"
                                                value={this.state.cleaning_status} disabled = "disabled"/>
                                            </div>

                                            <button className="btn btn-success" onClick={this.updateRoom}>update</button>
                                            <button className="btn btn-danger" onClick={this.cancel.bind(this)}style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
    
