package finaleproject.hotel.service;

import java.util.List;

import finaleproject.hotel.models.EmpCResult;
import finaleproject.hotel.models.Employees;




public interface EmployeeService {
	
	EmpCResult addEmployee(Employees c);
	EmpCResult UpdateEmployee(Employees c);
	EmpCResult getEmpSS(int empid);
	List<Employees> getallDetails();
	
	

	
	

}
