package edacproject.finaleproject.dao;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import edacproject.finaleproject.models.Customer;

@Repository
public interface Dao extends JpaRepository<Customer, Integer>
{
	@Query("from Customer where Name like :x% order by Checkindate desc")
	public List<Customer> findByName(@Param("x") String Name);
	
	@Query("from Customer where Checkoutdate>= curdate() or Checkoutdate = curdate() and Checkouttime >= now()")
	public List<Customer> getAllExisting();
}


