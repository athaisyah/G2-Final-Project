package com.server.dummy.handphone.MVC.Model;

public class HandphoneCustomerModel {
    private int id_customer;
    private String name;
    private long no_handphone;
    private String address;

    public HandphoneCustomerModel(int id_customer, String name, long no_handphone, String address){
        this.id_customer = id_customer;
        this.name = name;
        this.no_handphone = no_handphone;
        this.address = address;
    }

    public HandphoneCustomerModel(int no_handphone){
        this.no_handphone = no_handphone;
    }

    public HandphoneCustomerModel(){
    }

    public int getId_customer() {
        return id_customer;
    }

    public void setId_customer(int id_customer) {
        this.id_customer = id_customer;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getNo_handphone() {
        return no_handphone;
    }

    public void setNo_handphone(long no_handphone) {
        this.no_handphone = no_handphone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
