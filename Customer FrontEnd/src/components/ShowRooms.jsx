import React, { Component } from 'react'
import { Redirect } from 'react-router';
import RoomService from '../service/RoomService'
import Logout from './LogoutRec';

class ShowRooms extends Component{
    constructor(props){
        super(props)

        const token=localStorage.getItem("tokenrec");

        let loggedin=true;

        if(token==null)
        {
            loggedin=false;
        }

        this.state={
            rooms: [],
            loggedin

        }
        this.book= this.book.bind(this);
        this.updateRoombyAdmin=this.updateRoombyReceptionist.bind(this);
        // this.deleteRoombyAdmin=this.deleteRoombyAdmin.bind(this);
      
    }

    updateRoombyReceptionist(roomno){
        this.props.history.push(`/update-roominfo/${roomno}`);

    }
    book(roomno){
        this.props.history.push(`/add-Customer/${roomno}`);

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
            return <Redirect to="/Receptionlogin"></Redirect>
        }
        return (
            <div>
                <br/>
            <Logout/>
            <div  className="container" style={{backgroundImage: "url(/image.png)"}}>
                 
                <h2 className="text-center" style={{"font-family":"elephant","fontSize":"40px", "color":"white"}}> Rooms List</h2>
                <div className="row">
                    
                    {/* <div className="text-center"> */}
                    <table className="table table-striped table-bordered" style={{"borderWidth":"5px", 'borderColor':"black", 'borderStyle':'solid'}}  > 
 
                
                        <thead style={{'background-color': 'Navy',"border":"3px solid black","font-family":"arial black","color":"white"}}>
                       
                           
                            <tr>
                                 <th >Room no </th>
                                <th>Room type(bed)</th>
                                <th>Booking status</th>
                                <th>Cleaning status </th>
                                <th>Action</th>
                                
                             
                            </tr>
                        </thead>
                        <tbody style={{'border':"3px solid black"}}>
                            {
                                this.state.rooms.map(
                                    Rooms =>
                                    <tr key={Rooms.roomno} style={{'background-color': 'seashell',"border":"2px solid black", "font-family":"verdana" }}>
                                        <td>{Rooms.roomno}</td>
                                         <td>{Rooms.room_type}</td>
                                        <td>{Rooms.booking_status}</td>
                                        <td>{Rooms.cleaning_status}</td>
                                        <td>
                                            <button onClick= { () =>this.updateRoombyReceptionist(Rooms.roomno)}className="btn btn-info">Update</button>
                                         
                                            <button onClick= { () =>this.book(Rooms.roomno)}className="btn btn-info">Book</button>
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
export default ShowRooms;