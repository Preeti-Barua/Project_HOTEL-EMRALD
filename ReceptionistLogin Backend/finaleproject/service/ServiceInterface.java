package edacproject.finaleproject.service;

import java.util.List;

import edacproject.finaleproject.models.CResult;
import edacproject.finaleproject.models.Customer;
import edacproject.finaleproject.models.LoginAdmin;
import edacproject.finaleproject.models.LoginRec;
import edacproject.finaleproject.models.LoginResult;







//welcome to the hardest thing
//in a project
public interface ServiceInterface {
	
	LoginResult logss(String s);
	
	LoginResult loginAdmin(LoginAdmin ad);
	
	LoginResult loginReceptionist(LoginRec rc);
	
	List<Customer> getAllCustomers();
	CResult getAllExistingCustomers();
	CResult seeCustomersByName(String name);
	CResult createCustomer(Customer ua);
	CResult updateCustomer(Customer ua);
	CResult customerDetails(int customerId);
//	ContentResult blockUser(int acno);
//	ContentResult unBlockUser(int acno);
//	
//	ContentResult unblockGroupUsers(List<Customer> ls);
	


}
