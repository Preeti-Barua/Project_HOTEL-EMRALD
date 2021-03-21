import axios from 'axios';

const Rooms_API_BASE_URL="http://localhost:8080/";
class  RoomService 
{

    // getchecking()
    // {
    //     return axios.get(EMPLOYEE_API_BASE_URL+'a');
    // }
     getRooms()
     {
         return axios.post(Rooms_API_BASE_URL+'all');
     }
     Roominsert(Room)
     {
        console.log('Room =>' +JSON.stringify(Room));
         return axios.post(Rooms_API_BASE_URL+'ir',Room);
     }

     getRoomByRoomno(roomno)
     {
         return axios.post(Rooms_API_BASE_URL+'rs'+'/'+roomno);
     }

     updateRoombyReceptionist(Room){
        return axios.post(Rooms_API_BASE_URL+'ur',Room);
     }
     updateRoombyAdmin(Room){
        return axios.post(Rooms_API_BASE_URL+'ua',Room);
     }
     deleteRoombyAdmin(roomno){
        return axios.post(Rooms_API_BASE_URL+'d'+'/'+roomno);
     }
}
export default new RoomService()