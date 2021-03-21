package hotel.service;

import java.util.List;

import hotel.models.Outputc;
import hotel.models.Rooms;

public interface RoomserviceIntf {
	
	Outputc addRooms(Rooms r);
	Outputc deleteRoom(int roomno);
	Outputc roomSingleSelect(int roomno);
	Outputc roomUpdateByReceptionist(int roomno,String booking_status, String cleaning_status);
	Outputc roomUpdateByAdmin(int roomno,int seater);
	List<Rooms> allRooms();
	List <Rooms> allRoomsByBookingS(String booking_status);
	List <Rooms> allRoomsByCleaningS(String cleaning_status);
	

}
