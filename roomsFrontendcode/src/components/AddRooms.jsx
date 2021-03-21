import React, { Component } from 'react'
import RoomService from '../service/RoomService'

export default class AddRooms extends Component {
    constructor(props){
        super(props)

        this.state={
            roomno: '',
            room_type:'',
            booking_status:'',
            cleaning_status:''
        }

        this.changeroom_typeHandler=this.changeroom_typeHandler.bind(this)
        this.saveRoominfo=this.saveRoominfo.bind(this)
    }
    saveRoominfo= (r) =>{
        r.preventDefault();
        let Room= {roomno:this.state.roomno,
            room_type:this.state.room_type,
            booking_status:this.state.booking_status,
            cleaning_status:this.state.cleaning_status
            };
            console.log('Room =>' +JSON.stringify(Room));

            RoomService.Roominsert(Room).then(res =>{

                this.props.history.push('/Admin');
            });


    }
    changeroomnoHandler=(event)=>{
        this.setState({roomno: event.target.value});
    }
    changeroom_typeHandler=(event)=>{
        this.setState({room_type: event.target.value});
    }
    changebooking_statusHandler=(event)=>{
        this.setState({booking_status: event.target.value});
    }
    changecleaning_statusHandler=(event)=>{
        this.setState({cleaning_status: event.target.value});
    }
   
    cancel(){
        this.props.history.push('/Admin');
    }
    render() {
        return (
            <div style={{ backgroundImage: "url(/image.png)" }}> 
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Rooms</h3>
                        <div className="card-body">
                            <form>
                            <div className="form-group">
                                                <label> Room No.</label>
                                                <input placeholder="roomno" name="roomno" className="form-control"
                                                value={this.state.roomno} onChange={this.changeroomnoHandler}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Room Type</label>
                                                <input placeholder="room_type" name="room_type" className="form-control"
                                                value={this.state.room_type} onChange={this.changeroom_typeHandler}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Booking Status</label>
                                                <input placeholder="booking_status" name="booking_status" className="form-control"
                                                value={this.state.booking_status} onChange={this.changebooking_statusHandler}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Claning Status</label>
                                                <input placeholder="cleaning_status" name="cleaning_status" className="form-control"
                                                value={this.state.cleaning_status} onChange={this.changecleaning_statusHandler}/>
                                            </div>
                                           
                                           

                                            <button className="btn btn-success" onClick={this.saveRoominfo}>Save</button>
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
