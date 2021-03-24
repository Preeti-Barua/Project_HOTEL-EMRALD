package finaleproject.hotel.service;

import java.util.List;
import java.util.Optional;





import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import finaleproject.hotel.dao.Dao;
import finaleproject.hotel.dao.DaoAdmin;
import finaleproject.hotel.dao.DaoRec;
import finaleproject.hotel.dao.Daointerfaceroom;
import finaleproject.hotel.dao.EmployeeRespository;
import finaleproject.hotel.models.CResult;
import finaleproject.hotel.models.Customer;
import finaleproject.hotel.models.EmpCResult;
import finaleproject.hotel.models.Employees;
import finaleproject.hotel.models.LoginAdmin;
import finaleproject.hotel.models.LoginRec;
import finaleproject.hotel.models.LoginResult;
import finaleproject.hotel.models.Outputc;
import finaleproject.hotel.models.Rooms;



@Service
public class SImplenetation implements ServiceInterface 
{
	
	@Autowired
	private Dao d;
	
	@Autowired
	private DaoAdmin da;
	
	@Autowired
	private DaoRec dr;
	
	@Autowired
	private Daointerfaceroom rm;
	
	@Autowired
	private EmployeeRespository employeeRespository;
	
	@Autowired
	private RoomserviceIntf rs;
	
	

	@Override
	public LoginResult loginAdmin(LoginAdmin ad) {
		LoginResult lr=new LoginResult(0, null,null, "failed due to user");
		Optional<LoginAdmin> u=da.findById(ad.getAdminid());
		if(u.isPresent())
		{
			LoginAdmin u1=u.get();
			if(u1.getPassword().equals(ad.getPassword()))
			{
				
				lr.setContent(u1);
				lr.setStatus(1);
				lr.setReason("login successful");
			}
			else
			{
				lr.setStatus(0);
				lr.setReason("login failed due to wrong pin or wrong userId");
			}
		}
		
		return lr;
	}

	
	

	@Override
	public List<Customer> getAllCustomers() {
		List<Customer> l=null;
		l=d.findAll();
		return l;
	}

	@Override
	public CResult seeCustomersByName(String name) {
		CResult c1 =new CResult(0, null,null,"failed due to user");
		List<Customer> l=null;
		l=d.findByName(name);
		if(l!=null)
		{
			c1.setContlist(l);
			c1.setStatus(1);
			c1.setReason("success");
		}
		
		return c1;
	}

	@Transactional
	@Override
	public CResult createCustomer(Customer c,int roomno) {
		CResult c1=new CResult(0, null,null, "failed due to user");
		if(!d.existsById(c.getCustomerid()))
		{
			try {
				d.save(c);
				c1.setContent(c);
				c1.setStatus(1);
				c1.setReason("successful");
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		else
		{
			c1.setContent(null);
			c1.setReason("customer exist for this customer id");
			c1.setStatus(0);
		}
		if(c1.getStatus()==1)
		{
			Outputc o=rs.bookroom(roomno);
			if(o.getStatus()==0)
			{
				throw new RuntimeException("Errorr for Rollbck");
			}
		}
		
		
		return c1;
	}

	@Override
	public CResult updateCustomer(Customer c) {
		CResult c1 =new CResult(0, c,null, "failed due to user");
		if(d.existsById(c.getCustomerid()))
		{
			try {
				d.save(c);
				c1.setStatus(1);
				c1.setReason("success");
			} catch (Exception e) {
				
				e.printStackTrace();
			}
		}
		return c1;
	}

	@Override
	public CResult customerDetails(int customerId) {
		CResult c=new CResult(0, null,null, "failed due to user");
		Optional<Customer> u=d.findById(customerId);
		if(u.isPresent())
		{
			Customer u1=u.get();
			c.setContent(u1);
			c.setReason("successful");
			c.setStatus(1);
		}
		
		return c;
	}

	@Override
	public CResult getAllExistingCustomers() {
		CResult c1 =new CResult(0, null,null,"failed due to user");
		List<Customer> l=null;
		l=d.getAllExisting();
		if(l!=null)
		{
			c1.setContlist(l);
			c1.setStatus(1);
			c1.setReason("success");
		}
		
		return c1;
	}




	@Override
	public LoginResult logss(String s) {
		LoginResult lr=new LoginResult(0, null,null, "failed due to user");
		Optional<LoginAdmin> u=da.findById(s);
		if(u.isPresent())
		{
			LoginAdmin u1=u.get();
			
			{
				lr.setContent(u1);
				lr.setStatus(1);
				lr.setReason("login successful");
			}
			
			
		}
		return lr;
	}




	@Override
	public LoginResult loginReceptionist(LoginRec rc) {
		LoginResult lr=new LoginResult(0, null,null, "failed due to user");
		Optional<LoginRec> u=dr.findById(rc.getRecId());
		if(u.isPresent())
		{
			LoginRec u1=u.get();
			if(u1.getPassword().equals(rc.getPassword()))
			{
				
				lr.setRec(u1);
				lr.setStatus(1);
				lr.setReason("login successful");
			}
			else
			{
				lr.setStatus(0);
				lr.setReason("login failed due to wrong pin or wrong userId");
			}
		}
		
		return lr;
	}

	
//	***********************************************************rooms***************************
	
//	@Override
//	public Outputc addRooms(Rooms r) {
//		// TODO Auto-generated method stub
//		Outputc o= new Outputc(0,"invalid credentials! please check ",r);
//		try {
//			Optional<Rooms> op= rm.findById(r.getRoomno());
//			if(op.isPresent())
//			{
//				o.setContent(null);
//				o.setReason("this room is already present");
//				o.setStatus(0);
//				
//			}
//			else
//				if(r.getRoomno()!=0)
//			{
//				rm.save(r);
//				o.setStatus(1);
//				o.setReason("insert successful");
//			}
//				else {
//					o.setStatus(-1);
//					o.setReason("zero value can't be inserted");
//				}
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//			System.out.println("eror");
//		}
//		return o;
//	}
//
//	@Override
//	public Outputc deleteRoom(int roomno) {
//		// TODO Auto-generated method stub
//		Outputc o= new Outputc(0,"invalid credentials! please check ",null);
//		try {
//			Optional<Rooms> op= rm.findById(roomno);
//			if(op.isPresent())
//			{  
//				rm.deleteById(roomno);
//				o.setContent(null);
//				o.setReason("deleted successfully");
//				o.setStatus(1);
//				
//			}
//			else
//			{
//			o.setStatus(0);
//			o.setReason("the detail is not present to be deleted");
//			}
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//			System.out.println("error");
//		}
//		return o;
//	}
//
//	@Override
//	public Outputc roomSingleSelect(int roomno) {
//		// TODO Auto-generated method stub
//		Outputc o= new Outputc(0,"succeed",null);
//		Optional<Rooms> op= rm.findById(roomno);
//		if(op.isPresent())
//		{
//			Rooms rs= op.get();
//			o.setStatus(1);
//			o.setReason("single select succeed");
//			o.setContent(rs);
//		}
//		else
//		{
//			o.setContent(null);
//			o.setReason("no room present with this number");
//			o.setStatus(0);
//		}
//		return o;
//	}
//
//	@Override
//	public Outputc roomUpdateByReceptionist(Rooms r) {
//		// TODO Auto-generated method stub
//		Outputc o= new Outputc(0,"invalid credentials! please check ",null);
//		//Rooms r= new Rooms(roomno,0,booking_status, cleaning_status);
//		try {
//			Optional<Rooms> op= rm.findById(r.getRoomno());
//			if(op.isPresent())
//			{   Rooms ro =op.get();
//				ro.setBooking_status(r.getBooking_status());
//				ro.setCleaning_status(r.getCleaning_status());
//				rm.save(ro);
//				o.setContent(ro);
//				o.setReason("updeted successfully");
//				o.setStatus(1);
//				
//			}
//			else
//			{
//				o.setStatus(0);
//				o.setReason("the detail is not present to be updated");
//			}
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//			System.out.println("error");
//		}
//		return o;
//	}
//
//	@Override
//	public Outputc roomUpdateByAdmin(Rooms r) {
//		// TODO Auto-generated method stub
//		Outputc o= new Outputc(0,"invalid credentials! please check ",r);
//		//Rooms r= new Rooms(roomno,room_type,null, null);
//		int x=r.getRoom_type();
//		if(x!=1 && x!=2 && x!=3 && x!=4)
//		{
//			o.setContent(null);
//			o.setReason("invalid credential, only 1 to 4 seater avialable");
//			o.setStatus(0);
//		}
//		else {
//		try {
//			Optional<Rooms> op= rm.findById(r.getRoomno());
//			if(op.isPresent())
//			{   Rooms ro =op.get();
//				ro.setRoom_type(r.getRoom_type());
//				rm.save(ro);
//				o.setContent(ro);
//				o.setReason("updeted successfully");
//				o.setStatus(1);
//				
//			}
//			else
//			{
//			o.setStatus(0);
//			o.setReason("the detail is not present to be updated");
//			}
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//			System.out.println("error");
//		}
//		}
//		return o;
//	
//	}
//
//	@Override
//	public List<Rooms> allRooms() {
//		// TODO Auto-generated method stub
//		
//		return rm.findAll();
//	}
//
//	@Override
//	public List<Rooms> allRoomsByBookingS(String booking_status) {
//		// TODO Auto-generated method stub
//		booking_status="not booked";
//		return rm.multiselectbyBs(booking_status);
//	}
//
//	@Override
//	public List<Rooms> allRoomsByCleaningS(String cleaning_status) {
//		// TODO Auto-generated method stub
//		cleaning_status="dirty";
//		return rm.selectallbyCs(cleaning_status);
//	}
//
//	
////	***********************************************employee********************************
//	
//	
//	
//	
//	@Override
//	public EmpCResult addEmployee(Employees c)
//	{
//		EmpCResult c1 =new EmpCResult(0,c,"failed due to user");
//		if(!employeeRespository.existsById(c.getEmpid()))
//		{
//		try {
//			employeeRespository.save(c);
//			c1.setStatus(1);
//			c1.setReason("success");
//		}
//		catch(Exception e)
//		{
//			e.printStackTrace();
//		}
//			
//		}
//		else
//		{
//			c1.setReason("employee exist for this employee id ");
//			c1.setStatus(0);
//		}
//		return c1;
//	}
//
//
//
//
//	
//	
//	@Override
//	public EmpCResult UpdateEmployee(Employees c2) {
//		// TODO Auto-generated method stub
//		EmpCResult c1 =new EmpCResult(0, c2, "failed due to user");
//		if(employeeRespository.existsById(c2.getEmpid()))
//		{
//			try {
//				
//			
//			employeeRespository.save(c2);
//			c1.setStatus(1);
//			c1.setReason("success");
//		}
//			catch(Exception e)
//			{
//				e.printStackTrace();
//			}
//		}
//		return c1;
//	}
//
//	@Override
//	public List<Employees> getallDetails() {
//		// TODO Auto-generated method stub
//		return employeeRespository.findAll();
//	}
//
//
//
//
//
//
//
//	@Override
//	public EmpCResult getEmpSS(int empid) {
//		// TODO Auto-generated method stub
//		EmpCResult c1 =new EmpCResult(0, null, "failed due to user");
//		Optional<Employees> c = employeeRespository.findById(empid);
//		if(c.isPresent())
//		{
//			Employees x = c.get();
//			c1.setReason("success");
//			c1.setStatus(1);
//			c1.setContent(x);
//		}
//		else
//			System.out.println("did not get the object");	
//		
//		
//		return c1;
//	}



	
}
