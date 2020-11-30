package com.server.dummy.telephone.MVC.Model;

public class TelephoneBillModel extends TelephoneCustomerModel {
    private int id_bill;
    private int amount;
    private String period;
    private String status;

    public TelephoneBillModel(int id_customer, String name, int no_telephone, String address,
                              int id_bill, int amount, String period, String status) {
        super(id_customer, name, no_telephone, address);
        this.id_bill = id_bill;
        this.amount = amount;
        this.period = period;
        this.status = status;
    }

    public TelephoneBillModel(int id_bill, int amount, String period, String status) {
        this.id_bill = id_bill;
        this.amount = amount;
        this.period = period;
        this.status = status;
    }

    public TelephoneBillModel() {

    }

    public int getId_bill() {
        return id_bill;
    }

    public void setId_bill(int id_bill) {
        this.id_bill = id_bill;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getPeriod() {
        return period;
    }

    public void setPeriod(String period) {
        this.period = period;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
