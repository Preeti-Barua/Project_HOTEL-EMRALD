package edacproject.finaleproject.service;

import java.util.List;
import java.util.Optional;





import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import edacproject.finaleproject.dao.Dao;
import edacproject.finaleproject.dao.DaoAdmin;
import edacproject.finaleproject.dao.DaoRec;
import edacproject.finaleproject.models.CResult;
import edacproject.finaleproject.models.Customer;
import edacproject.finaleproject.models.LoginAdmin;
import edacproject.finaleproject.models.LoginRec;
import edacproject.finaleproject.models.LoginResult;



@Service
public class SImplenetation implements ServiceInterface 
{
	
	@Autowired
	private Dao d;
	
	@Autowired
	private DaoAdmin da;
	
	@Autowired
	private DaoRec dr;
	
	

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

	


//	@Override
//	public ContentResult updateUser(UserAcc ua) {
//		ContentResult c1 =new ContentResult(0, ua, "failed due to user");
//		if(ar.existsById(ua.getAcno()))
//		{
//			ar.save(ua);
//			c1.setStatus(1);
//			c1.setReason("success");
//		}
//		return c1;
//	}

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

	@Override
	public CResult createCustomer(Customer c) {
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

	
}
