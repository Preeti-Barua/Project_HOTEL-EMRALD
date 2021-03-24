package finaleproject.hotel.service;

import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;

import finaleproject.hotel.models.CResult;
import finaleproject.hotel.models.Customer;
import finaleproject.hotel.models.EmpCResult;
import finaleproject.hotel.models.Employees;
import finaleproject.hotel.models.LoginAdmin;
import finaleproject.hotel.models.LoginRec;
import finaleproject.hotel.models.LoginResult;
import finaleproject.hotel.models.Outputc;
import finaleproject.hotel.models.Rooms;







//welcome to the hardest thing
//in a project
public interface ServiceInterface {
	
	LoginResult logss(String s);
	
	LoginResult loginAdmin(LoginAdmin ad);
	
	LoginResult loginReceptionist(LoginRec rc);
	
	
	
	List<Customer> getAllCustomers();
	CResult getAllExistingCustomers();
	CResult seeCustomersByName(String name);
	CResult createCustomer(Customer ua,int roomno);
	CResult updateCustomer(Customer ua);
	CResult customerDetails(int customerId);
//	ContentResult blockUser(int acno);
//	ContentResult unBlockUser(int acno);
//	
//	ContentResult unblockGroupUsers(List<Customer> ls);
	
//***************************************************Rooms************************
	
//	Outputc addRooms(Rooms r);
//	Outputc deleteRoom(int roomno);
//	Outputc roomSingleSelect(int roomno);
//	Outputc roomUpdateByReceptionist(Rooms r);
//	Outputc roomUpdateByAdmin(Rooms r);
//	List<Rooms> allRooms();
//	List <Rooms> allRoomsByBookingS(String booking_status);
//	List <Rooms> allRoomsByCleaningS(String cleaning_status);
	
//	*******************************************employee****************************
	
//	EmpCResult addEmployee(Employees c);
//	EmpCResult UpdateEmployee(Employees c);
//	EmpCResult getEmpSS(int empid);
//	List<Employees> getallDetails();

}
