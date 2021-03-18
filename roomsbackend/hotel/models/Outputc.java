package hotel.models;

public class Outputc {
	private int status;
	private String reason;
	private Rooms content;
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public Rooms getContent() {
		return content;
	}
	public void setContent(Rooms content) {
		this.content = content;
	}
	public Outputc(int status, String reason, Rooms content) {
		super();
		this.status = status;
		this.reason = reason;
		this.content = content;
	}
	public Outputc() {
	
		// TODO Auto-generated constructor stub
	}
	

}
