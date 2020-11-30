package com.server.dummy.handphone.MVC.Model;

public class HandphoneBillModel extends HandphoneCustomerModel {
    private int id_bill;
    private int amount;
    private String period;
    private String status;
    private String provider;

    public HandphoneBillModel(int id_customer, String name, int no_handphone, String address,
                              int id_bill, int amount, String period, String status, String provider) {
        super(id_customer, name, no_handphone, address);
        this.id_bill = id_bill;
        this.amount = amount;
        this.period = period;
        this.status = status;
        this.provider = provider;
    }

    public HandphoneBillModel(int id_bill, int amount, String period, String status, String provider) {
        this.id_bill = id_bill;
        this.amount = amount;
        this.period = period;
        this.status = status;
        this.provider = provider;
    }

    public HandphoneBillModel() {

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

    public String getProvider() {
        return provider;
    }

    public void setProvider(String provider) {
        this.provider = provider;
    }
}
