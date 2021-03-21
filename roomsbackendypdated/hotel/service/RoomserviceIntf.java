package hotel.service;

import java.util.List;

import hotel.models.Outputc;
import hotel.models.Rooms;

public interface RoomserviceIntf {
	
	Outputc addRooms(Rooms r);
	Outputc deleteRoom(int roomno);
	Outputc roomSingleSelect(int roomno);
	Outputc roomUpdateByReceptionist(Rooms r);
	Outputc roomUpdateByAdmin(Rooms r);
	List<Rooms> allRooms();
	List <Rooms> allRoomsByBookingS(String booking_status);
	List <Rooms> allRoomsByCleaningS(String cleaning_status);
	

}
