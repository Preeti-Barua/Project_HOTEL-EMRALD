package edacproject.finaleproject.models;



public class LoginResult 
{
	private int status;
	private LoginAdmin content;
	private LoginRec rec;
	private String reason;
	
	public LoginResult(int status, LoginAdmin content, LoginRec rec, String reason) {
		super();
		this.status = status;
		this.content = content;
		this.rec = rec;
		this.reason = reason;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public LoginAdmin getContent() {
		return content;
	}

	public void setContent(LoginAdmin content) {
		this.content = content;
	}

	public LoginRec getRec() {
		return rec;
	}

	public void setRec(LoginRec rec) {
		this.rec = rec;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}
	
	

}
