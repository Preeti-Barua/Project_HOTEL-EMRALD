package finaleproject.hotel.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Rooms {
	@Id
 private int roomno;
 public Rooms(int roomno, int room_type, String booking_status, String cleaning_status) {
		super();
		this.roomno = roomno;
		this.room_type = room_type;
		this.booking_status = booking_status;
		this.cleaning_status = cleaning_status;
	}
private int room_type;
 private String booking_status;
 private String cleaning_status;
 
public Rooms() {
	
	// TODO Auto-generated constructor stub
}
public int getRoomno() {
	return roomno;
}
public void setRoomno(int roomno) {
	this.roomno = roomno;
}
@Override
public String toString() {
	return "Rooms [roomno=" + roomno + ", room_type=" + room_type + ", booking_status=" + booking_status
			+ ", cleaning_status=" + cleaning_status + "]";
}
public int getRoom_type() {
	return room_type;
}
public void setRoom_type(int room_type) {
	this.room_type = room_type;
}
public String getBooking_status() {
	return booking_status;
}
public void setBooking_status(String booking_status) {
	this.booking_status = booking_status;
}
public String getCleaning_status() {
	return cleaning_status;
}
public void setCleaning_status(String cleaning_status) {
	this.cleaning_status = cleaning_status;
}
 
 
}
