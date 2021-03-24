package finaleproject.hotel.service;

import java.util.List;

import finaleproject.hotel.models.Outputc;
import finaleproject.hotel.models.Rooms;



public interface RoomserviceIntf {
	
	Outputc addRooms(Rooms r);
	Outputc bookroom(int roomno);
	Outputc unBookRoom(int roomno);
	Outputc deleteRoom(int roomno);
	Outputc roomSingleSelect(int roomno);
	Outputc roomUpdateByReceptionist(Rooms r);
	Outputc roomUpdateByAdmin(Rooms r);
	List<Rooms> allRooms();
	List <Rooms> allRoomsByBookingS(String booking_status);
	List <Rooms> allRoomsByCleaningS(String cleaning_status);
	
	

}
