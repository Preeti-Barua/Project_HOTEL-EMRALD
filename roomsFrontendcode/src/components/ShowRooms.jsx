import React, { Component } from 'react'
import RoomService from '../service/RoomService'

class ShowRooms extends Component{
    constructor(props){
        super(props)

        this.state={
            rooms: []

        }
        this.addRooms= this.addRooms.bind(this);
        this.updateRoombyAdmin=this.updateRoombyReceptionist.bind(this);
        this.deleteRoombyAdmin=this.deleteRoombyAdmin.bind(this);
      
    }

    updateRoombyReceptionist(roomno){
        this.props.history.push(`/update-roominfo/${roomno}`);

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
        return (
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
                                <th></th>
                                <th></th>
                             
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
                                         </td>
                                             <td>
                                                  <button onClick= { () =>this.deleteRoombyAdmin(Rooms.roomno)}className="btn btn-info">Delete</button>
                                            </td>
                                    </tr>         
                                )
                            }
                        </tbody>
                            
                    </table>
                    </div>

                </div>
            // </div>
        )
    }
}
export default ShowRooms;