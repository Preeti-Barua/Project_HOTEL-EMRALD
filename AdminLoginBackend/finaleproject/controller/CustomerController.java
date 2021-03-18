package edacproject.finaleproject.controller;

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

import edacproject.finaleproject.models.CResult;
import edacproject.finaleproject.models.Customer;
import edacproject.finaleproject.models.LoginAdmin;
import edacproject.finaleproject.models.LoginResult;
import edacproject.finaleproject.service.ServiceInterface;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class CustomerController {
	
	@Autowired
	private ServiceInterface s;
	
	
	
	@GetMapping("/abc")
	public String f1()
	{
		return "who asked us to be optimistic";
	}
	
	
	@PostMapping("/logadmin")
	public LoginResult lg(@RequestBody LoginAdmin ad)
	{
		System.out.println(ad.getAdminid()+"  dddd  "+ad.getPassword());
		LoginResult l=s.loginAdmin(ad);
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
	
	@PostMapping("/cc")
	CResult createCustomer(@RequestBody Customer c)
	{
		CResult c1=s.createCustomer( c);
		return c1;
		
		
	}
	
	
	@PostMapping("/upt")
	CResult updateCustomer(@RequestBody Customer c)
	{
		CResult c1=s.updateCustomer( c);
		return c1;
	}
	
	
	@GetMapping("/ss")
	CResult customerDetails(@RequestParam int customerId)
	{
		CResult c1=s.customerDetails( customerId);
		return c1;
	}
	
	
	
	
	

}
