package finaleproject.hotel.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import finaleproject.hotel.models.Rooms;



@Repository
public interface Daointerfaceroom extends JpaRepository<Rooms, Integer>{
	@Query("from Rooms where booking_status= :x" )
	public List<Rooms> multiselectbyBs(@Param ("x") String booking_status);
	
	@Query("from Rooms where cleaning_status= :y")
	public List<Rooms> selectallbyCs(@Param ("y") String cleaning_status);
	
	
	

}
