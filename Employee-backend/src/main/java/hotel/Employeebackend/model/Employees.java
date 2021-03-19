package hotel.Employeebackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity

public class Employees
{
	
	
	        @Id
	       
	        private int empid;
	        @Override
			public String toString() {
				return "Employee [empid=" + empid + ", govtid=" + govtid + ", name=" + name + ", occupation="
						+ occupation + ", gender=" + gender + ", permanent_address=" + permanent_address
						+ ", temporary_address=" + temporary_address + ", dateofbirth=" + dateofbirth
						+ ", localrefrence=" + localrefrence + ", phoneno=" + phoneno + ", status=" + status + "]";
			}


			private String govtid;
			private String name;
			private String occupation;
			private String gender;
			private String permanent_address;
			private String temporary_address;
			private String dateofbirth;
			private String localrefrence;
			private String phoneno;
			private String status;
			
			
	        public Employees(int empid, String govtid, String name, String occupation, String gender,
					String permanent_address, String temporary_address, String dateofbirth, String localrefrence,
					String phoneno, String status) {
				super();
				this.empid = empid;
				this.govtid = govtid;
				this.name = name;
				this.occupation = occupation;
				this.gender = gender;
				this.permanent_address = permanent_address;
				this.temporary_address = temporary_address;
				this.dateofbirth = dateofbirth;
				this.localrefrence = localrefrence;
				this.phoneno = phoneno;
				this.status = status;
			}

	  
	        public int getEmpid() {
	  				return empid;
	  			}




	  			public void setEmpid(int empid) {
	  				this.empid = empid;
	  			}




	  			public String getGovtid() {
	  				return govtid;
	  			}




	  			public void setGovtid(String govtid) {
	  				this.govtid = govtid;
	  			}




	  			public String getName() {
	  				return name;
	  			}




	  			public void setName(String name) {
	  				this.name = name;
	  			}




	  			public String getOccupation() {
	  				return occupation;
	  			}




	  			public void setOccupation(String occupation) {
	  				this.occupation = occupation;
	  			}




	  			public String getGender() {
	  				return gender;
	  			}




	  			public void setGender(String gender) {
	  				this.gender = gender;
	  			}




	  			public String getPermanent_address() {
	  				return permanent_address;
	  			}




	  			public void setPermanent_address(String permanent_address) {
	  				this.permanent_address = permanent_address;
	  			}




	  			public String getTemporary_address() {
	  				return temporary_address;
	  			}




	  			public void setTemporary_address(String temporary_address) {
	  				this.temporary_address = temporary_address;
	  			}




	  			public String getDateofbirth() {
	  				return dateofbirth;
	  			}




	  			public void setDateofbirth(String dateofbirth) {
	  				this.dateofbirth = dateofbirth;
	  			}




	  			public String getLocalrefrence() {
	  				return localrefrence;
	  			}




	  			public void setLocalrefrence(String localrefrence) {
	  				this.localrefrence = localrefrence;
	  			}




	  			public String getPhoneno() {
	  				return phoneno;
	  			}




	  			public void setPhoneno(String phoneno) {
	  				this.phoneno = phoneno;
	  			}




	  			public String getStatus() {
	  				return status;
	  			}




	  			public void setStatus(String status) {
	  				this.status = status;
	  			}

	
			public Employees()
			{
				
			}
	
	
		
			
			
}
