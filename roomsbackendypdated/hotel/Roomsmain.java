package hotel;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import daoindepedenttest.Mainclass;

@SpringBootApplication
public class Roomsmain implements CommandLineRunner {
	
	
	

	public static void main(String[] args)  {
		// TODO Auto-generated method stub
System.out.println("initial check");
SpringApplication.run(Roomsmain.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		// for insert
		/*Rooms r= new Rooms(202,2, "not booked","dirty");
		d.save(r);
		System.out.println("value inserted");
		*/
		
		//for single select
		/*int roomno=101;
		//Rooms ro= new Rooms();
		Optional<Rooms> r= d.findById(roomno);
		//System.out.println(ro.getRoomno()+ro.getSeater()+ro.getBooking_status()+ro.getCleaning_status());
		System.out.println(r);
		*/
		
		/*List <Rooms> l= d.multiselectbyBs("not booked");
		for(Rooms r:l)
		{
			System.out.println(r.getRoomno());
		}*/
		/*List <Rooms> li= d.selectallbyCs("dirty");
		for(Rooms r:li)
		{
			System.out.println(r.getRoomno());
		}
		*/
		
		
	}

}
