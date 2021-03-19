package hotel.Employeebackend.controller;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import hotel.Employeebackend.Service.EmployeeService;
import hotel.Employeebackend.exception.ResourceNotFoundException;
import hotel.Employeebackend.model.EmpCResult;
import hotel.Employeebackend.model.Employees;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/employees/")
public class EmployeeController {

	@Autowired
	private EmployeeService s;
	
	
	@GetMapping("/a")
	public String f1()
	{
		return "working";
	}
	
	
	@PostMapping("/add")
	public EmpCResult addEmployee(@RequestBody Employees c) {
		
		
		EmpCResult a=s.addEmployee(c);
		return a;
		
	}
	
	@PostMapping("/update")
	public EmpCResult updateEmployee(@RequestBody Employees c)
	{
		EmpCResult x=s.UpdateEmployee(c);
		return x;
	}
//	
//	@DeleteMapping("/remove")
//	public EmpCResult removeEmployee(@RequestParam("x") int empid)
//	{
//		EmpCResult x=s.removeEmployee(empid);
//		return x;
//	}
//	
//	
	
	@GetMapping("/ss/{empid}")
	public EmpCResult getEmpSS(@PathVariable int empid)
	{
		
		/*
		System.out.println("single select  is" + accno);
		CResult cr =new CResult(1,new Acc(1, "pqr", 20),"singletest");
		return cr;
		
		*/
		System.out.println("ss"+empid);
		EmpCResult x = s.getEmpSS(empid);
		return x;
	
		
	}
	
	@GetMapping("/ms")
	public List<Employees> getallDetails(){
		
		/*
		
		List<Acc> l =new ArrayList<Acc>();
		l.add(new Acc(10,"A",3));
		return l;
		
		*/
		List<Employees> l =s.getallDetails();
		return l;
		
		
	}
	
	
	

}
