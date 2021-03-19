package hotel.Employeebackend.dao;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import hotel.Employeebackend.model.Employees;


@Repository
public interface EmployeeRespository extends JpaRepository<Employees,Integer>
{

	
	/* 
	 * 	@Query("from Employee where salary >= :abc")
	public List<Employee> f1(@Param("abc") int sal);*/
	
	@Query("from Employees where status='working")
	public List <Employees>f1(@Param("working") String status);
}
