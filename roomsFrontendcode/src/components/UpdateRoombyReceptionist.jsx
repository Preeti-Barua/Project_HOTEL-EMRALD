import React, { Component } from 'react'

import RoomService from '../service/RoomService'

export default class UpdateRoombyReceptionist extends Component {
    constructor(props){
        super(props) 

        this.state={
            roomno: this.props.match.params.roomno,
            room_type:'',
            booking_status:'',
            cleaning_status:'',
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
            
            

            RoomService.updateRoombyReceptionist(r1).then(res =>{

                this.props.history.push('/Reception');
            });


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
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">update Room</h3>
                        <div className="card-body">
                            <form>
                            
                                            <div className="form-group">
                                                <label>Room No</label>
                                                <input placeholder="roomno" className="form-control"
                                                value={this.state.roomno} />
                                            </div>
                                            <div className="form-group">
                                                <label>Room Type</label>
                                                <input placeholder="Room type" className="form-control"
                                                value={this.state.room_type} />
                                            </div>
                                            <div className="form-group">
                                                <label>Booking Status</label>
                                                <input placeholder="booking status"
                                                name="booking_status" className="form-control"
                                                value={this.state.booking_status} onChange={this.changebooking_statusHandler} />
                                            </div>
                                            <div className="form-group">
                                                <label>Cleaning Status</label>
                                                <input placeholder="cleaning status"
                                                name="cleaning_status" className="form-control"
                                                value={this.state.cleaning_status} onChange={this.changecleaning_statusHandler} />
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
    
