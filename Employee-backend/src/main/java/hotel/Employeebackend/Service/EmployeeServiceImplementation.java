package hotel.Employeebackend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import hotel.Employeebackend.dao.EmployeeRespository;
import hotel.Employeebackend.model.EmpCResult;
import hotel.Employeebackend.model.Employees;
@Service
public  class EmployeeServiceImplementation implements EmployeeService{
	
	@Autowired
	private EmployeeRespository employeeRespository;
	
	@Override
	public EmpCResult addEmployee(Employees c)
	{
		EmpCResult c1 =new EmpCResult(0,c,"failed due to user");
		if(!employeeRespository.existsById(c.getEmpid()))
		{
		try {
			employeeRespository.save(c);
			c1.setStatus(1);
			c1.setReason("success");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
			
		}
		else
		{
			c1.setReason("employee exist for this employee id ");
			c1.setStatus(0);
		}
		return c1;
	}




	
	
	@Override
	public EmpCResult UpdateEmployee(Employees c2) {
		// TODO Auto-generated method stub
		EmpCResult c1 =new EmpCResult(0, c2, "failed due to user");
		if(employeeRespository.existsById(c2.getEmpid()))
		{
			try {
				
			
			employeeRespository.save(c2);
			c1.setStatus(1);
			c1.setReason("success");
		}
			catch(Exception e)
			{
				e.printStackTrace();
			}
		}
		return c1;
	}

	@Override
	public List<Employees> getallDetails() {
		// TODO Auto-generated method stub
		return employeeRespository.findAll();
	}







	@Override
	public EmpCResult getEmpSS(int empid) {
		// TODO Auto-generated method stub
		EmpCResult c1 =new EmpCResult(0, null, "failed due to user");
		Optional<Employees> c = employeeRespository.findById(empid);
		if(c.isPresent())
		{
			Employees x = c.get();
			c1.setReason("success");
			c1.setStatus(1);
			c1.setContent(x);
		}
		else
			System.out.println("did not get the object");	
		
		
		return c1;
	}



}
