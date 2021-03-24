package finaleproject.hotel.models;



public class EmpCResult {
	

	private int status;
	private Employees content; // will have account details of inserted, updated, deleted
	private String reason;
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public Employees getContent() {
		return content;
	}
	public void setContent(Employees content) {
		this.content = content;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public EmpCResult() {
		// TODO Auto-generated constructor stub
	}
	public EmpCResult(int status, Employees content, String reason) {

		this.status = status;
		this.content = content;
		this.reason = reason;
	}

}
