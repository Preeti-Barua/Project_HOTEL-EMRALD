package hotel.Employeebackend.Service;

import java.util.List;


import hotel.Employeebackend.model.EmpCResult;
import hotel.Employeebackend.model.Employees;


public interface EmployeeService {
	
	EmpCResult addEmployee(Employees c);
	EmpCResult UpdateEmployee(Employees c);
	EmpCResult getEmpSS(int empid);
	List<Employees> getallDetails();
	
	

	
	

}
