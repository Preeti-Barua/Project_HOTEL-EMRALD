package finaleproject.hotel.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="Customer")
@Entity
public class Customer {
	
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int Customerid;
	private String Govtid;
	private String Name;
	private String Gender;
	private String Phone_no; 
	private String City_address;
	private String Pincode;
	private String Roomno;
	private String Checkindate;
	private String Checkintime;
	private String Checkoutdate;
	private String Checkouttime;
	
	public Customer(int customerid, String govtid, String name, String gender, String phone_no, String city_address,
			String pincode, String roomno, String checkindate, String checkintime, String checkoutdate,
			String checkouttime) {
		super();
		Customerid = customerid;
		Govtid = govtid;
		Name = name;
		Gender = gender;
		Phone_no = phone_no;
		City_address = city_address;
		Pincode = pincode;
		Roomno = roomno;
		Checkindate = checkindate;
		Checkintime = checkintime;
		Checkoutdate = checkoutdate;
		Checkouttime = checkouttime;
	}

	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getCustomerid() {
		return Customerid;
	}

	public void setCustomerid(int customerid) {
		Customerid = customerid;
	}

	public String getGovtid() {
		return Govtid;
	}

	public void setGovtid(String govtid) {
		Govtid = govtid;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getGender() {
		return Gender;
	}

	public void setGender(String gender) {
		Gender = gender;
	}

	public String getPhone_no() {
		return Phone_no;
	}

	public void setPhone_no(String phone_no) {
		Phone_no = phone_no;
	}

	public String getCity_address() {
		return City_address;
	}

	public void setCity_address(String city_address) {
		City_address = city_address;
	}

	public String getPincode() {
		return Pincode;
	}

	public void setPincode(String pincode) {
		Pincode = pincode;
	}

	public String getRoomno() {
		return Roomno;
	}

	public void setRoomno(String roomno) {
		Roomno = roomno;
	}

	public String getCheckindate() {
		return Checkindate;
	}

	public void setCheckindate(String checkindate) {
		Checkindate = checkindate;
	}

	public String getCheckintime() {
		return Checkintime;
	}

	public void setCheckintime(String checkintime) {
		Checkintime = checkintime;
	}

	public String getCheckoutdate() {
		return Checkoutdate;
	}

	public void setCheckoutdate(String checkoutdate) {
		Checkoutdate = checkoutdate;
	}

	public String getCheckouttime() {
		return Checkouttime;
	}

	public void setCheckouttime(String checkouttime) {
		Checkouttime = checkouttime;
	}

	@Override
	public String toString() {
		return "Customer [Customerid=" + Customerid + ", Govtid=" + Govtid + ", Name=" + Name + ", Gender=" + Gender
				+ ", Phone_no=" + Phone_no + ", City_address=" + City_address + ", Pincode=" + Pincode + ", Roomno="
				+ Roomno + ", Checkindate=" + Checkindate + ", Checkintime=" + Checkintime + ", Checkoutdate="
				+ Checkoutdate + ", Checkouttime=" + Checkouttime + "]";
	}
	
	
	
}
