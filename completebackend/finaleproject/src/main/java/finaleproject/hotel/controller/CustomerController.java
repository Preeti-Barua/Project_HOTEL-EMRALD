package finaleproject.hotel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import finaleproject.hotel.models.CResult;
import finaleproject.hotel.models.Customer;
import finaleproject.hotel.models.EmpCResult;
import finaleproject.hotel.models.Employees;
import finaleproject.hotel.models.LoginAdmin;
import finaleproject.hotel.models.LoginRec;
import finaleproject.hotel.models.LoginResult;
import finaleproject.hotel.models.Outputc;
import finaleproject.hotel.models.Rooms;
import finaleproject.hotel.service.EmployeeService;
import finaleproject.hotel.service.RoomserviceIntf;
import finaleproject.hotel.service.ServiceInterface;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class CustomerController {
	
	@Autowired
	private ServiceInterface s;
	
	@Autowired
	private RoomserviceIntf rm;
	
	@Autowired
	private EmployeeService em;
	
	
	
	@GetMapping("/abc")
	public String f1()
	{
		return "who asked us to be optimistic";
	}
	
	
	@PostMapping("/logadmin")
	public LoginResult loginAdmin(@RequestBody LoginAdmin ad)
	{
		System.out.println(ad.getAdminid()+"  dddd  "+ad.getPassword());
		LoginResult l=s.loginAdmin(ad);
		return l;
	}
	
	@PostMapping("/logrec")
	public LoginResult loginReceptionist(@RequestBody LoginRec rc)
	{
		System.out.println(rc.getRecId()+"  dddd  "+rc.getPassword());
		LoginResult l=s.loginReceptionist(rc);
		return l;
	}
	
	@GetMapping("/logss")
	public LoginResult logss(@RequestParam String sr)
	{
		LoginResult l= s.logss(sr);
		return l;
	}
	
	@GetMapping("/aa")
	public List<Customer> f2()
	{
		List<Customer> l=s.getAllCustomers();
		return l;
	}
	
	
	@GetMapping("/dd")
	public CResult findExistingCustomers()
	{
		CResult c=s.getAllExistingCustomers();
		return c;
	}
	
	@GetMapping("/byname")
	public CResult findCustomerByName(@RequestParam String name)
	{
		CResult c=s.seeCustomersByName(name);
		return c;
	}
	
//	@PostMapping("/cc/{roomno}")
//	CResult createCustomer(@RequestBody Customer c,@PathVariable int roomno)
//	{
//		System.out.println(c);
//		CResult c1=s.createCustomer(c,roomno);
//		return c1;
//		
//		
//	}
	
	@PostMapping("/bk/{roomno}")
	CResult booking(@RequestBody Customer c,@PathVariable int roomno)
	{
		System.out.println(c);
		CResult c1=s.createCustomer( c,roomno);
		return c1;
		
		
	}
	
	
	@PostMapping("/upt")
	CResult updateCustomer(@RequestBody Customer c)
	{
		CResult c1=s.updateCustomer( c);
		return c1;
	}
	
	
	@GetMapping("/ss/{cid}")
	CResult customerDetails(@PathVariable int cid)
	{
		CResult c1=s.customerDetails( cid);
		return c1;
	}
	
	
//*******************EMPLOYEE **************************************************8
	

		
		
		@GetMapping("/employees/a")
		public String fn()
		{
			return "working";
		}
		
		
		@PostMapping("/employees/add")
		public EmpCResult addEmployee(@RequestBody Employees c) {
			
			
			EmpCResult a=em.addEmployee(c);
			return a;
			
		}
		
		@PostMapping("/employees/update")
		public EmpCResult updateEmployee(@RequestBody Employees c)
		{
			EmpCResult x=em.UpdateEmployee(c);
			return x;
		}
	//	
//		@DeleteMapping("/remove")
//		public EmpCResult removeEmployee(@RequestParam("x") int empid)
//		{
//			EmpCResult x=em.removeEmployee(empid);
//			return x;
//		}
	//	
	//	
		
		@GetMapping("/employees/ss/{empid}")
		public EmpCResult getEmpSS(@PathVariable int empid)
		{
			
			/*
			System.out.println("single select  is" + accno);
			CResult cr =new CResult(1,new Acc(1, "pqr", 20),"singletest");
			return cr;
			
			*/
			System.out.println("ss"+empid);
			EmpCResult x = em.getEmpSS(empid);
			return x;
		
			
		}
		
		@GetMapping("/employees/ms")
		public List<Employees> getallDetails(){
			
			/*
			
			List<Acc> l =new ArrayList<Acc>();
			l.add(new Acc(10,"A",3));
			return l;
			
			*/
			List<Employees> l =em.getallDetails();
			return l;
			
			
		}
		
//	********************************************rooms********************************************
		
		
		
		@GetMapping("/room/demo")
		public String demo()
		{ 
			return "this will print";
			
		}
		
		@PostMapping("/room/ir")
		public Outputc addRooms(@RequestBody Rooms r)  
		
		{ 
			System.out.println("insert is" + r);
			Outputc o= rm.addRooms(r);
			return o; 	
		}
		
		@PostMapping("/room/unbk/{roomno}")
		public Outputc unBookRoom(@PathVariable int roomno)
		{
			Outputc o= rm.unBookRoom(roomno);
			return o;
		}
		
		@PostMapping("/room/rs/{roomno}")
		public Outputc singleSelect(@PathVariable int roomno)
		{
			Outputc o= rm.roomSingleSelect(roomno);
			return o;
		}

		@PostMapping("/room/d/{roomno}")
		public Outputc deleteByRoomno(@PathVariable int roomno)
		{
			Outputc o= rm.deleteRoom(roomno);
			
			return o;
		}
		
		@PostMapping("/room/ur")
		public Outputc roomUpdateByReceptionist(@RequestBody Rooms r)
		{
			Outputc o= rm.roomUpdateByReceptionist(r);
			
			return o;
		}
		
		@PostMapping("/room/ua")
		public Outputc roomUpdateByAdmin(@RequestBody Rooms r)
		{
			Outputc o= rm.roomUpdateByAdmin( r);
			
			return o;
		}
		
		@PostMapping("/room/all")
		public List<Rooms> allRooms()
		{
			List<Rooms> l= rm.allRooms();
			
			return l;
		}
		
		@PostMapping("/room/allRB")
		public List<Rooms> allRoomsByBookingS(String booking_status)
		{
			List<Rooms> l= rm.allRoomsByBookingS(booking_status);
			
			return l;
		}
		
		@PostMapping("/room/allRC")
		public List<Rooms> allRoomsByCleaningS(String cleaning_status)
		{
			List<Rooms> l= rm.allRoomsByCleaningS(cleaning_status);
			
			return l;
		}
	

}
