package edacproject.finaleproject.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="Login_Receptionist")
@Entity
public class LoginRec {

	@Id
	private String RecId;
	private String Password;
	
	public LoginRec(String recId, String password) {
		super();
		RecId = recId;
		Password = password;
	}

	public LoginRec() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getRecId() {
		return RecId;
	}

	public void setRecId(String recId) {
		RecId = recId;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}
}
