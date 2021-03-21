package hotel.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hotel.dao.Daointerfaceroom;
import hotel.models.Outputc;
import hotel.models.Rooms;
import hotel.*;


@Service
public class RoomServiceImp implements RoomserviceIntf {
	
	@Autowired
	private Daointerfaceroom d;

	@Override
	public Outputc addRooms(Rooms r) {
		// TODO Auto-generated method stub
		Outputc o= new Outputc(0,"invalid credentials! please check ",r);
		try {
			Optional<Rooms> op= d.findById(r.getRoomno());
			if(op.isPresent())
			{
				o.setContent(null);
				o.setReason("this room is already present");
				o.setStatus(0);
				
			}
			else
				if(r.getRoomno()!=0)
			{
			d.save(r);
			o.setStatus(1);
			o.setReason("insert successful");
			}
				else {
					o.setStatus(-1);
					o.setReason("zero value can't be inserted");
				}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("eror");
		}
		return o;
	}

	@Override
	public Outputc deleteRoom(int roomno) {
		// TODO Auto-generated method stub
		Outputc o= new Outputc(0,"invalid credentials! please check ",null);
		try {
			Optional<Rooms> op= d.findById(roomno);
			if(op.isPresent())
			{   d.deleteById(roomno);
				o.setContent(null);
				o.setReason("deleted successfully");
				o.setStatus(1);
				
			}
			else
			{
			o.setStatus(0);
			o.setReason("the detail is not present to be deleted");
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("error");
		}
		return o;
	}

	@Override
	public Outputc roomSingleSelect(int roomno) {
		// TODO Auto-generated method stub
		Outputc o= new Outputc(0,"succeed",null);
		Optional<Rooms> op= d.findById(roomno);
		if(op.isPresent())
		{
			Rooms rs= op.get();
			o.setStatus(1);
			o.setReason("single select succeed");
			o.setContent(rs);
		}
		else
		{
			o.setContent(null);
			o.setReason("no room present with this number");
			o.setStatus(0);
		}
		return o;
	}

	@Override
	public Outputc roomUpdateByReceptionist(Rooms r) {
		// TODO Auto-generated method stub
		Outputc o= new Outputc(0,"invalid credentials! please check ",null);
		//Rooms r= new Rooms(roomno,0,booking_status, cleaning_status);
		try {
			Optional<Rooms> op= d.findById(r.getRoomno());
			if(op.isPresent())
			{   Rooms ro =op.get();
			ro.setBooking_status(r.getBooking_status());
			ro.setCleaning_status(r.getCleaning_status());
			d.save(ro);
				o.setContent(ro);
				o.setReason("updeted successfully");
				o.setStatus(1);
				
			}
			else
			{
			o.setStatus(0);
			o.setReason("the detail is not present to be updated");
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("error");
		}
		return o;
	}

	@Override
	public Outputc roomUpdateByAdmin(Rooms r) {
		// TODO Auto-generated method stub
		Outputc o= new Outputc(0,"invalid credentials! please check ",r);
		//Rooms r= new Rooms(roomno,room_type,null, null);
		int x=r.getRoom_type();
		if(x!=1 &&x!=2&&x!=3&&x!=4)
		{
			o.setContent(null);
			o.setReason("invalid credential, only 1 to 4 seater avialable");
			o.setStatus(0);
		}
		else {
		try {
			Optional<Rooms> op= d.findById(r.getRoomno());
			if(op.isPresent())
			{   Rooms ro =op.get();
			ro.setRoom_type(r.getRoom_type());
			d.save(ro);
				o.setContent(ro);
				o.setReason("updeted successfully");
				o.setStatus(1);
				
			}
			else
			{
			o.setStatus(0);
			o.setReason("the detail is not present to be updated");
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("error");
		}
		}
		return o;
	
	}

	@Override
	public List<Rooms> allRooms() {
		// TODO Auto-generated method stub
		
		return d.findAll();
	}

	@Override
	public List<Rooms> allRoomsByBookingS(String booking_status) {
		// TODO Auto-generated method stub
		booking_status="not booked";
		return d.multiselectbyBs(booking_status);
	}

	@Override
	public List<Rooms> allRoomsByCleaningS(String cleaning_status) {
		// TODO Auto-generated method stub
		cleaning_status="dirty";
		return d.selectallbyCs(cleaning_status);
	}

}
