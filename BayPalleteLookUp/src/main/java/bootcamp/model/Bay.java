package bootcamp.model;

public class Bay {
	int id;
	String dep;
	String masterbay;
	
	public String getMasterbay() {
		return masterbay;
	}

	public void setMasterbay(String masterbay) {
		this.masterbay = masterbay;
	}
	
	public Bay() {
	}
	
	public int getId() {
		return this.id;
	}
	public String getDep() {
		return this.dep;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setDep(String dep) {
		this.dep = dep;
	}
	


}
