package edacproject.finaleproject.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="Login_Admin")
@Entity
public class LoginAdmin {

	@Id
	private String Adminid;
	private String Password;
	public LoginAdmin(String adminid, String password) {
		super();
		Adminid = adminid;
		Password = password;
	}
	public LoginAdmin() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getAdminid() {
		return Adminid;
	}
	public void setAdminid(String adminid) {
		Adminid = adminid;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	
	
}
