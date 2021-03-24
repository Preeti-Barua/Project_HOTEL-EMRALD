package finaleproject.hotel.models;

import java.util.List;

public class CResult {
	
	private int status;
	private Customer content; // will have Customer  details of inserted, updated, deleted
	private List<Customer> contlist;
	private String reason;
	public CResult(int status, Customer content, List<Customer> contlist, String reason) {
		super();
		this.status = status;
		this.content = content;
		this.contlist = contlist;
		this.reason = reason;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public Customer getContent() {
		return content;
	}
	public void setContent(Customer content) {
		this.content = content;
	}
	public List<Customer> getContlist() {
		return contlist;
	}
	public void setContlist(List<Customer> contlist) {
		this.contlist = contlist;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	

}
