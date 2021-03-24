import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router';
import RoomService from '../service/RoomService'
import Logout from './LogoutAdmin';

class RoomInformation extends Component{
    constructor(props){
        super(props)

        const token=localStorage.getItem("token");

        let loggedin=true;

        if(token==null)
        {
            loggedin=false;
        }

        this.state={
            rooms: [],

            loggedin

        }
        this.addRooms= this.addRooms.bind(this);
        this.updateRoombyAdmin=this.updateRoombyAdmin.bind(this);
        this.deleteRoombyAdmin=this.deleteRoombyAdmin.bind(this);
      
    }

    updateRoombyAdmin(roomno){
        this.props.history.push(`/update-room/${roomno}`);

    }
    deleteRoombyAdmin(roomno){
        this.props.history.push(`/delete-room/${roomno}`);

    }
    addRooms(){
        this.props.history.push('/add-rooms');
    }
   
    // checkEmployee(){
    //     this.props.history.push('/checking');
    // }
    componentDidMount(){

        RoomService.getRooms().then((res) => {

            this.setState({rooms: res.data});
            console.log(res.data);
        });


     }
    render()
    {
        if(this.state.loggedin=== false)
        {
            return <Redirect to="/Adminlogin"></Redirect>
        }
        return (
            <div>
                <br/>
                <Logout/>
            <div className="container"  style={{backgroundImage: "url(/image.png)"}} >
                 <br/>
                
                <h2 className="text-center" style={{"font-family":"elephant","fontSize":"40px", "color":"white"}}> Rooms List</h2>
                <div className="row">
                    
                    {/* <div className="text-center"> */}
                    <table className="table table-striped table-bordered" style={{"borderWidth":"5px", 'borderColor':"black", 'borderStyle':'solid'}}  > 
                
                        <thead style={{'background-color': 'Navy',"border":"3px solid black","font-family":"arial black","color":"white"}}>
                       
                           
                            <tr >
                                 <th >Room No</th>
                                <th>Room_type(bed)</th>
                                <th>Booking_status</th>
                                <th>Cleaning_status </th>
                                <th>Action</th>
                                
                             
                            </tr>
                        </thead>
                        <tbody style={{'border':"3px solid black"}}>
                            {
                                this.state.rooms.map(
                                    Rooms =>
                                    <tr key={Rooms.roomno}  style={{'background-color': 'seashell',"border":"2px solid black", "font-family":"verdana" }}>
                                        <td >{Rooms.roomno}</td>
                                         <td>{Rooms.room_type}</td>
                                        <td>{Rooms.booking_status}</td>
                                        <td>{Rooms.cleaning_status}</td>
                                        <td>
                                            <button onClick= { () =>this.updateRoombyAdmin(Rooms.roomno)}className="btn btn-info">Update </button>
                                            <button onClick= { () =>this.deleteRoombyAdmin(Rooms.roomno)}className="btn btn-info">Delete </button>
                                        </td>
                                    </tr>         
                                )
                            }
                        </tbody>
                            
                    </table>
                    </div>

                </div>
             </div>
        )
    }
}
export default RoomInformation;