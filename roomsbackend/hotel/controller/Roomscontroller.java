package hotel.controller;

import java.util.List;

import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParseException;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import hotel.models.Outputc;
import hotel.models.Rooms;
import hotel.service.RoomserviceIntf;
@CrossOrigin(origins="http://localhost:8081")
@RestController
public class Roomscontroller {
	@Autowired
	private RoomserviceIntf s;
	
	@GetMapping("/demo")
	public String demo()
	{ 
		return "this will print";
		
	}
	
	@PostMapping("/add")
	public Outputc addRooms(@RequestBody Rooms r) throws JsonParseException 
	
	{ 
		System.out.println("insert is" + r);
		Outputc o= s.addRooms(r);
	return o; 	
	}
	
	@GetMapping("/ss")
	public Outputc singleSelect( int roomno)
	{
		Outputc o= s.roomSingleSelect(roomno);
		return o;
	}

	@PostMapping("/d")
	public Outputc deleteByRoomno(int roomno)
	{
		Outputc o= s.deleteRoom(roomno);
		
		return o;
	}
	
	@PostMapping("/ur")
	public Outputc roomUpdateByReceptionist(int roomno, String booking_status, String cleaning_status)
	{
		Outputc o= s.roomUpdateByReceptionist(roomno, booking_status, cleaning_status);
		
		return o;
	}
	
	@PostMapping("/ua")
	public Outputc roomUpdateByAdmin(int roomno, int room_type)
	{
		Outputc o= s.roomUpdateByAdmin(roomno, room_type);
		
		return o;
	}
	
	@PostMapping("/all")
	public List<Rooms> allRooms()
	{
		List<Rooms> l= s.allRooms();
		
		return l;
	}
	
	@PostMapping("/allRB")
	public List<Rooms> allRoomsByBookingS(String booking_status)
	{
		List<Rooms> l= s.allRoomsByBookingS(booking_status);
		
		return l;
	}
	
	@PostMapping("/allRC")
	public List<Rooms> allRoomsByCleaningS(String cleaning_status)
	{
		List<Rooms> l= s.allRoomsByCleaningS(cleaning_status);
		
		return l;
	}
	
	
	
	
}
